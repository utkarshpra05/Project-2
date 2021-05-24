var totalContacts= document.querySelectorAll('li');                             //select all "li" elemets which gives contact.
var contactList=Array.from(totalContacts);                                      //creates an array of totalContacts from which the contacts ar fetched.

var numberOfContact= totalContacts.length;                                      // gives total number of contacts
var contactsPerPage= 10;                                                        //can be changed
// var numberOfPages= Math.floor(numberOfContact/contactsPerPage);              //used to calculate number of pages to display, if 5 pages are to be displayed
var numberOfPages= Math.ceil(numberOfContact/contactsPerPage);                  //If 6 pages are to be displayed
var ptoHtmlButton= "" , ptoHtmlContact="";
var selectedPage;

//prints the HTML file with the dyanamic page number button
for(i=1;i<=numberOfPages;i++)
{
    ptoHtmlButton= ptoHtmlButton + "<li><a href='#' id="+i+" onClick=Replyback(this.id)>"+i+"</a></li>"; 
} 
document.querySelector('.pagination').insertAdjacentHTML('afterbegin', ptoHtmlButton);


document.querySelector('.contact-list').innerHTML="";                             //clears the contact list elements in the HTML. 


//Displays first contacts when the page is refreshed.
for(j=0;j<contactsPerPage;j++)
{
    eachElement= contactList[j].outerHTML;
    ptoHtmlContact= ptoHtmlContact + eachElement;
    
    document.querySelector('.contact-list').innerHTML=ptoHtmlContact;       
}


//Function to print the HTML file with the contacts based on the page number selected.
function Show(selectedPage)
{    
    var ptoHtmlContact="", displayedContact;
    for(k=0;k<contactsPerPage;k++)
    {
        displayedContact= (selectedPage-1)*contactsPerPage+k;
        if(contactList[displayedContact]!=null)                                     //if check to prevent errors in last page while trying non existant contacts.
        {       
        eachElement= contactList[displayedContact].outerHTML;
        ptoHtmlContact= ptoHtmlContact + eachElement;
        
        document.querySelector('.contact-list').innerHTML=ptoHtmlContact;
        }
    }
}
//Replyback function that triggers Show function and takes the clicked_id value from the clicked button. line 14
function Replyback(clicked_id)
  { 
        Show(clicked_id);
  }

  