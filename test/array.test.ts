describe('Array', () => {
    it('How to make Array Typescript', () => {

        const names: String[] = ['budi', 'joko', 'anwar']
        const number: Number[] = [1, 2, 3]

        console.log(names);
        console.log(number);

    }),

        it('Read only Array', () => {

            const hobby: ReadonlyArray<String> = ["Membaca", "Menulis"];
            console.log(hobby);
            console.log(hobby[0]);
            console.log(hobby[1]);

            // hobby[0] = 'jalan-jalan'
            // array readOnly tidak bisa dirubah

        })
})