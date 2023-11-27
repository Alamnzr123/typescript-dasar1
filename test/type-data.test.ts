// TIPE DATA PRIMITIVE
describe('Type data', () => {
    it('should must declare', () => {
        // let name = 'Alam'; // string
        // name = 123 // number
        // kalau javascript dari let inisiasi variable baru tidak error
        // typescript strongly type jadi variable awal tidak bisa dirubah

        const balance: Number = 12
        const name: String = 'Alam'
        const choice: Boolean = true

        console.log(balance);
        console.log(name);
        console.log(choice);

        // let balance: Number = 12
        // let name: String = 'Alam'
        // let choice: Boolean = true

        // console.log(balance);
        // console.log(name);
        // console.log(choice);

        // balance = '123'
        // name = 12
        // choice = 12
        // walaupun error saat jalankan kompilasi npx tsc
        // saat dijalankan test akan success karena dari typescript akan dikompilasi jadi javascript menyebabkan tidak error

    })
})