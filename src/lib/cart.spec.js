import Cart from './cart';

describe('Cart', () =>{
    let cart;

    let product = {
        title: 'Adidas running shoes - me',
        price: 35388
    }

    beforeEach(()=> {
        cart = new Cart;
    });

    it('should return 0 when getTotal() is executed in a newly created in instacia', () => {
        expect(cart.getTotal()).toEqual(0)
    })

    it('should multiply quantity an price and receive the total amount', () =>{
        const item  = {
            product,            
            quantity: 2
        };

        cart.add(item)

        expect(cart.getTotal()).toEqual(70776)
    })

    it('should ensure no more than on product exist at time', () =>{
        cart.add({
            product,
            quantity:2
        })

        cart.add({
            product,
            quantity:1
        })

        expect(cart.getTotal()).toEqual(106164)

    })
})
