export interface BookState {
  loading: boolean;
  message: string;
  error: null;
  selectedAuthorIdForCreateBook: string;
  bookResult: [];
}
