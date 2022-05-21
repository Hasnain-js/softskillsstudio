import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./container/layout";
import { PageError } from "./Pages/404";
import { Blogs } from "./Pages/blog";
import { Contact } from "./Pages/contact";
import { Home } from "./Pages/home";
import { Teams } from "./Pages/teams";
export const AppRouter = () => {
    return(
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" index element={<Home />} />
            <Route path="team" element={<Teams />} />
            <Route path="blog" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route
              path="*"
              element={<PageError />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    )
}
