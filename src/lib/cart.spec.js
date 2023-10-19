import Cart from './cart';

describe('Cart', () =>{
    let cart;

    let product = {
        title: 'Adidas running shoes - me',
        price: 35388,
    }

    let product2 = {
        title: 'Mizuno running shoes - me',
        price: 5000
    }

    beforeEach(()=> {
        cart = new Cart;
    });

    describe('getTotal()', () =>{
        it('should return 0 when getTotal() is executed in a newly created in instacia', () => {
            expect(cart.getTotal().getAmount()).toEqual(0)
        })
    
        it('should multiply quantity an price and receive the total amount', () =>{
            const item  = {
                product,            
                quantity: 2
            };
    
            cart.add(item)
    
            expect(cart.getTotal().getAmount()).toEqual(70776)
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
    
            expect(cart.getTotal().getAmount()).toEqual(35388)
    
        })
    
        it('should update total when a product gets included and removed', () => {
            cart.add({
                product: product2,
                quantity:2
            })
    
            cart.add({
                product,
                quantity:2
            })        
            cart.remove(product)
    
            expect(cart.getTotal().getAmount()).toEqual(10000);
        })
    })

    describe('checkout()', () => {
        it('should return an object wih the total and the list of items', () =>{
            cart.add({
                product,
                quantity:2
            })

            cart.add({
                product: product2,
                quantity:3
            })

            expect(cart.checkout()).toMatchSnapshot();
        })

        it('should return an object wih the total and the list of items when sumary () is called ', () =>{
            cart.add({
                product,
                quantity:2
            })

            cart.add({
                product: product2,
                quantity:3
            })

            expect(cart.sumary()).toMatchSnapshot();
            expect(cart.getTotal().getAmount()).toBeGreaterThan(0)
        })

        it('should reset the cart when chackout() is called', () => {
            cart.add({
                product: product2,
                quantity:3
            })
    
            cart.checkout();
    
            expect(cart.getTotal().getAmount()).toEqual(0);
        })
    })

   
})
