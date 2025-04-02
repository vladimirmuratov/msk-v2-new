function* IdGenerator() {
    let id = 0;
    while (true) {
        yield ++id;
        // console.log('id -> ', id);
    }
}

const idIterator = IdGenerator();

export const createId = () => idIterator.next().value
