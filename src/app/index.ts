import express, { Application } from "express";
import { router } from "../router";
import path from "path";
import cors from "cors";
import cookieParser from "cookie-parser";

class App {
  private server: Application;
  
  constructor() {
    this.server = express();
    this.middleware();
    this.router();
  }

  private middleware(): void {
    this.server.use(cors());
    this.server.use(cookieParser());
    this.server.use(express.json());
    this.server.use(express.urlencoded({extended: false}));
    this.server.use(express.static(path.join(__dirname, "public")));
  }

  private router(): void {
    this.server.use("/api", router);
  }

  public listen(port: string | number, callback: () => void): void {
    this.server.listen(port, callback);
  }
}

export default App;