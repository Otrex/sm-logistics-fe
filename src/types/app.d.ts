export interface RequestOptions {
  method: RequestMethod;
  url: string;
  data?: Record<string, any>;
  params?: Record<string, any>;
  contentType?: string;
}

export enum RequestMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}
