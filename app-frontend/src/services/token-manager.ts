class TokenManager {
  private accessToken: string | null;
  private refreshToken: string | null;

  public constructor() {
    this.accessToken = null;
    this.refreshToken = null;
  }

  private async fetchAccessToken() {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        throw new Error("Refresh token not found");
      }
      this.accessToken = token;
      return token;
    } catch (error) {
      console.error("Error fetching access token:", error);
      return null;
    }
  }
  private async fetchRefreshToken() {
    try {
      const token = localStorage.getItem("refreshToken");
      if (!token) {
        throw new Error("Refresh token not found");
      }
      this.refreshToken = token;
      return token;
    } catch (error) {
      console.error("Error fetching refresh token:", error);
      return null;
    }
  }

  public async storeTokens(accessToken: string, refreshToken: string) {
    try {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      this.accessToken = accessToken;
      this.refreshToken = refreshToken;
      return true;
    } catch (error) {
      console.error("Error storing tokens:", error);
      return false;
    }
  }

  public async getAccessToken() {
    if (!this.accessToken) {
      this.fetchAccessToken();
    }
    return this.accessToken;
  }

  public async getRefreshToken() {
    if (!this.refreshToken) {
      this.fetchRefreshToken();
    }
    return this.refreshToken;
  }

  public async removeTokens() {
    try {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");

      this.accessToken = null;
      this.refreshToken = null;
      return true;
    } catch (error) {
      console.error("Error removing tokens:", error);
      return false;
    }
  }
}

const tokenManager = new TokenManager();
export default tokenManager;
