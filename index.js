// ==================================
// DOM selection
// ==================================

const orderForm = document.querySelector('[data-form');


// ==================================
// Helper function
// ==================================

function handleSubmit(event){
    event.preventDefault();
    console.log('You get a coffee and you get a coffee and you get a coffee');

    console.log(event.target);
    // debugger;
    // We're gonna Ajax that thing.
    // call fetch()
    // pass it the urel
    // and an object with a method and a body
    const url = event.target.action;
    const method = event.target.method;
    const elements = event.target.elements;
    const data = {
        strength: elements.strength.value
        flavor: elements.flavor.value
        size: elements.size.value
        coffee: elements.coffee.value
        emailAddress: elements.emailAddress.value
    }
    fetch(url, {
        method: method,
        headers: (
            "content-type":"application/json; charset-utf-8",  
        )
        body: JSON.stringify(data)
    })
    .then(r => r.JSON())
    .then(console.log)
    // debugger;
}

// ==================================
// Main Event Listeners
// ==================================
console.log('about to add event listener!')
orderForm.addEventListener('submit', handleSubmit);