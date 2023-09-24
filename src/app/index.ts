import express, { Application } from "express";
import { router } from "../router";

class App {
  private server: Application;
  
  constructor() {
    this.server = express();
    this.middleware();
    this.router();
  }

  private middleware(): void {
    this.server.use(express.json());
  }

  private router(): void {
    this.server.use("/api", router);
  }

  public listen(port: string | number, callback: () => void): void {
    this.server.listen(port, callback);
  }
}

export default App;