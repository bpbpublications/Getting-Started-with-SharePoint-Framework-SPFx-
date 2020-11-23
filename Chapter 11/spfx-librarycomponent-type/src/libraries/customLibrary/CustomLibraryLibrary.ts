export class CustomLibraryLibrary {
  public getCurrentTime(): string {
    return 'The current time as returned from the library is ' + new Date().toTimeString();
  }
}
