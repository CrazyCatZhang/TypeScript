(function () {
    interface Cat {
        name: string;

        run(): void;
    }

    interface Fish {
        name: string;

        swim(): void;
    }

    function isFish(animal: Cat | Fish) {
        return typeof (animal as Fish).swim === 'function';
    }

    class ApiError extends Error {
        code: number = 0;
    }

    class HttpError extends Error {
        statusCode: number = 200;
    }

    function isApiError(error: Error) {
        return typeof (error as ApiError).code === 'number';
    }

    (window as any).foo = 1

    interface Animal {
        name: string;
    }

    interface Cat {
        name: string;

        run(): void;
    }

    let tom: Cat = {
        name: 'Tom',
        run: () => {
            console.log('run')
        }
    };
    let animal: Animal = tom;

    function testAnimal(animal: Animal) {
        return (animal as Cat);
    }

    function testCat(cat: Cat) {
        return (cat as Animal);
    }
})()