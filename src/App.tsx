import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Home from "@/pages/Home";
import Team from "@/pages/Team";
import Research from "@/pages/Research";
import Teaching from "@/pages/Teaching";
import News from "@/pages/News";
import NewsDetail from "@/pages/NewsDetail";
import GalleryDetail from "@/pages/GalleryDetail";
import Links from "@/pages/Links";

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/research" element={<Research />} />
            <Route path="/teaching" element={<Teaching />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/gallery/:id" element={<GalleryDetail />} />
            <Route path="/links" element={<Links />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
