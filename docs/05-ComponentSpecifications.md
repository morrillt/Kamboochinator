### Core Components
1. **ProductCard**
   - Display individual kombucha product with image, flavor name, description (5 words max)
   - Handle container selection (can/bottle)
   - Include quantity selector
   - "Add to Cart" functionality
   - Responsive design for different screen sizes

2. **ProductGrid/List**
   - Container for displaying multiple ProductCards
   - simple side by side gallery of product cards

3. **CartWidget**
   - Floating cart icon with item count
   - Expandable mini-cart preview
   - "Go to Checkout" button

4. **CartPage**
   - Full cart view with all selected products
   - Quantity adjustment controls
   - Remove item functionality
   - Price calculations (subtotal, tax, total)
   - "Proceed to Checkout" button

5. **CheckoutForm**
   - Customer information fields (name, email, shipping)
   - Integration with Stripe payment elements
   - Order summary
   - Form validation
   - Submit order functionality

6. **OrderConfirmation**
   - Thank you message
   - Order details summary
   - Order reference number
   - "Continue Shopping" button

### UI Components
1. **NavBar**
   - Logo/brand
   - Navigation links to different store variations
   - Cart icon with item count

2. **Footer**
   - Copyright information
   - Links (About, Contact, etc.)
   - Social media icons (optional)

3. **QuantitySelector**
   - Reusable +/- controls with input field
   - Min/max validation

4. **ContainerSelector**
   - Toggle or radio buttons for can/bottle selection
   - Visual indication of selected option

5. **LoadingSpinner**
   - Visual indicator for async operations
   - Consistent styling across the application

### Data Requirements
1. **Product Data Structure**
   ```
   {
     id: string,
     name: string,
     description: string,
     image: string,
     price: {
       can: number,
       bottle: number
     },
     flavors: string[],
     ingredients: string[]
   }
   ```

2. **Cart Item Structure**
   ```
   {
     productId: string,
     quantity: number,
     containerType: 'can' | 'bottle',
     price: number,
     subtotal: number
   }
   ```

### State Management
1. **Products Module**
   - Store available products
   - Handle product filtering/sorting

2. **Cart Module**
   - Add/remove/update cart items
   - Calculate totals
   - Persist cart between sessions

3. **Checkout Module**
   - Handle order submission
   - Manage checkout process state
   - Store order history