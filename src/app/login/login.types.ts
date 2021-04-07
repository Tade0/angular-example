export interface LoginDTO {
  payload: {
    data: {
      type: string;
      attributes: {
        email: string;
        password: string;
      }
    }
  }
}