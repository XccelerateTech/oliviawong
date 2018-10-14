//check if name and phone number input are valid
/*
1. Validate using JQuery the name should be less than 50 characters
2. Validate phone number should be between 6 numbers to 16 numbers
3. The Clear button should remove all the value input to the text box.
4. When the input field is invalid, the border of the corresponding 
input should be changed to red
5. Add a Update Contacts list section for the page which has the same 
validation as the create contact list.
6. When I click on the row of the contact list, the values of the 
contact list should be filled in to the update form.
7. Alert the input of name , phone number and email after both forms 
are submitted and validated.
*/



//Answer from GitHub

// validate name is less than 50 characters
$('.name').on('keydown', function(event) { 
    // keydown event in input when user input - selecting class, name 
    var input = event.target.value; 
    //the e.target.value are the characters that the user types into the input
    if(input.length > 50) { //check if length is over 50
        $(this).css('border','solid 2px red'); //change the css
        alert(`The name is too long. It should not exceed 50 characters`)
    }else{
        $(this).css('border','solid 1px black'); //change the css back
    }
});
// validate that number is between 6-16 characters

$('.phone').on('blur', function(e) { 

    /* blur event - if the user clicks out of the targeted element 
(that is the moment user click out of the input field) 
"focus" is when the field is click on and active for input 
"blur" the element loses focus
 */
    var input = e.target.value;
    if(input.length < 6 || input.length > 16 || isNaN(input)) { //check if the input is between 6-16 numbers or is Not a Number 
        $(this).css('border','solid 2px red'); //change css
        alert(`Not a valid phone number`)
    } else {
        $(this).css('border','solid 1px black'); //change it back
    }
});

// fill update section with specific row
$('#contact-list').on('click','.row',function(e) { //target a specific row by clicking on the elements in that row
    var rowElements = $(this).children(); //declare variables, store the children of the clicked element in a variable 
    var updateFormElements = $('#update-form input').slice(0,rowElements.length); // get all elements (values right now empty) from the array (update-form input) --> store values in new variable, updateFormElements
    for(var i =0; i < rowElements.length; i++) {
        $(updateFormElements[i]).val($(rowElements[i]).html()); //use the for loop to iterate over each element in the new array, assign the values from the rowElements into updateFormElements using .val() 
        //Set the value of each element in the set of matched elements from rowElements.
    }
    $('#update-form').prop('row-id',$(this).attr('id')); 
//in update form, get this (row object) property row-id and the id associated with this attribute so that you update the correct form.
});

let rowIdCounter = $('#contact-list tbody').find('tr').length;  //see how many rows there are in our table

// all form submit
$('.contact-form').submit(function(e) { //when the contact-form is submitted do this.
    e.preventDefault(); //stops from reloading the page (there is sometimes default e.g. reloading for event)
    var formId = e.target.id;
    var name = e.target.name.value;
    var phone = e.target.phone.value; //get all information from form that the user filled out, store into newly defined varibles
    var email = e.target.email.value;
    // the to be inserted contact information
    const row = $(`
        <tr class="row">        
            <td>${name}</td>
            <td>${phone}</td>
            <td>${email}</td>
        </tr>`
    );    
    
    //deal with form submissions.
    //construct the object that will be added to the dom(HTML markup), pass the previously defined variables which store the user info
    // if you are adding a new contact just append to list of existing contacts

    if(formId === 'create-form') { //if the form that is submitted is called 'create-form do this:
        $(row).attr("id",`row-${rowIdCounter++}`); //increase the number in row-id
        $('tbody').append(row); //append the object that was created (in row) to the 'tbody'
        $(this).find('.clear').click(); //clear the information from the inputs (reset input fields)
    } else {
        $(row).attr("id",$(this).prop('row-id'));
        // if you want to update a contact, find the relevant row and replace that row with updated information. Search goes by email as that will be unique.
        $('#'+$(this).prop('row-id')).replaceWith(row);
        // logic above pushes the information created in row over the attribute that was previously selected
    }
    alert(`Name is ${name},Phone is ${phone},Email is ${email}`);
});