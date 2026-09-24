/*
 * Medicao do site (Google Analytics 4). Um unico arquivo, carregado por todas as paginas:
 * SPA (client/index.html), posts do blog (scripts/generate-blog.mjs) e landings do simulador.
 *
 * Para trocar a propriedade, altere so o GA_ID abaixo. Enquanto ele for o valor de
 * exemplo, este arquivo nao faz nada (nem carrega o gtag).
 *
 * Privacidade: nao envia nome, e-mail, telefone nem texto de formulario ao Google.
 * Consentimento: armazenamento de anuncios e personalizacao ficam negados; so medicao.
 */
(function () {
  'use strict';
  var GA_ID = 'G-XXXXXXXXXX';
  if (!/^G-[A-Z0-9]{6,}$/.test(GA_ID) || GA_ID === 'G-XXXXXXXXXX') return;

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;

  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'granted'
  });
  gtag('js', new Date());
  // page_view manual: a SPA troca de rota sem recarregar a pagina
  gtag('config', GA_ID, { send_page_view: false });

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);

  function track(name, params) {
    try { gtag('event', name, params || {}); } catch (e) { /* medicao nunca deve quebrar a pagina */ }
  }
  window.sbfTrack = track;

  // ---- page_view, inclusive nas trocas de rota da SPA (wouter usa history.pushState) ----
  var lastPath = null;
  function pageView() {
    var path = location.pathname + location.search;
    if (path === lastPath) return;
    lastPath = path;
    track('page_view', { page_path: path, page_location: location.href, page_title: document.title });
  }
  ['pushState', 'replaceState'].forEach(function (m) {
    var orig = history[m];
    history[m] = function () {
      var r = orig.apply(this, arguments);
      // espera o titulo da nova rota ser atualizado
      setTimeout(pageView, 50);
      return r;
    };
  });
  window.addEventListener('popstate', function () { setTimeout(pageView, 50); });
  pageView();

  // ---- cliques nos CTAs principais ----
  document.addEventListener('click', function (ev) {
    var a = ev.target && ev.target.closest ? ev.target.closest('a[href]') : null;
    if (!a) return;
    var href = a.getAttribute('href') || '';
    if (href.indexOf('wa.me/') > -1) {
      track('click_whatsapp', { link_url: href.split('?')[0], page_path: location.pathname });
    } else if (href.indexOf('calendar.google.com/calendar/appointments') > -1) {
      track('click_agendar', { page_path: location.pathname });
    } else if (/(^|\/)simulador-cbs(\/|$)/.test(href.split('?')[0].replace(/^https?:\/\/[^/]+/, ''))) {
      track('click_simulador', { page_path: location.pathname });
    }
  }, true);

  // ---- envio de lead: todos os formularios postam no mesmo Apps Script ----
  // Observa o fetch em vez de editar as paginas do simulador (validadas e sensiveis).
  // Registra o ENVIO (nao confirma que a planilha gravou). So le o campo "source"/"action".
  var origFetch = window.fetch;
  if (typeof origFetch === 'function') {
    window.fetch = function (input, init) {
      var p = origFetch.apply(this, arguments);
      try {
        var url = typeof input === 'string' ? input : (input && input.url) || '';
        var method = ((init && init.method) || (input && input.method) || 'GET').toUpperCase();
        if (url.indexOf('script.google.com/macros') > -1 && method === 'POST') {
          var meta = {};
          try { meta = JSON.parse(init && init.body) || {}; } catch (e) { meta = {}; }
          p.then(function () {
            if (meta.action === 'book') track('agendar_reuniao', { page_path: location.pathname });
            else track('generate_lead', { lead_source: meta.source || 'formulario', page_path: location.pathname });
          }, function () { /* falha de rede: nao conta como lead */ });
        }
      } catch (e) { /* ignora */ }
      return p;
    };
  }
})();
