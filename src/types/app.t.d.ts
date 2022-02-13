export interface RequestOptions {
  method: RequestMethod;
  url: string;
  data?: Record<string, any>;
  params?: Record<string, any>;
  contentType?: string;
}

export enum RequestMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export type FormSetterType = (data: Partial<FormType>) => void;

export type PropState<T> = { stateMngr: T };

export type IWrapper = ThemedStyledProps<
  Pick<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "key" | keyof React.HTMLAttributes<HTMLDivElement>
  > & { width?: string },
  any
>;

interface History {
  status: string;
}
