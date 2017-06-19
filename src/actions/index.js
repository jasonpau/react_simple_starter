export function selectBook(book) {
    // select_book is an action creator and needs to return an action; an object with a type property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}