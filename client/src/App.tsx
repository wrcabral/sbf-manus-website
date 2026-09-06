import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Obrigado from "./pages/Obrigado";
import MetodoReal from "./pages/MetodoReal";
import RotaTributaria from "./pages/RotaTributaria";
import SimuladorCBS from "./pages/SimuladorCBS";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Politica from "./pages/Politica";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/obrigado"} component={Obrigado} />
      <Route path={"/metodo-real"} component={MetodoReal} />
      <Route path={"/rota-tributaria"} component={RotaTributaria} />
      <Route path={"/simulador-cbs"} component={SimuladorCBS} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/blog/page/:page"} component={Blog} />
      <Route path={"/politica-de-privacidade"} component={Politica} />
      {/* Migrated blog post permalinks — must come after the routes above
          so they don't shadow them. */}
      <Route path={"/:year/:month/:day/:slug"} component={BlogPost} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
