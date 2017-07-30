import React, { Component } from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

/*Commented code for stateless function component*/

//function ContactList(props){
//    return(
//             <ol className="contact-list">
//                 {
//                     props.contact.map(contact => 
//                         <li key={contact.id} className="contact-list-item">
//                             <div className="contact-avatar" style={{
//                                 backgroundImage:`url(${contact.avatarURL})`
//                             }}/>
//                             <div className="contact-details">
//                                 <p>{contact.name}</p>
//                                 <p>{contact.email}</p>
//                             </div> 
//                             <button className="contact-remove" onClick={()=>props.clickDelete(contact)}>
//                                 Remove
//                             </button>
//                         </li>
//                     )
//                 }

//             </ol>
//         ) 
// }



//Child component to display data
class ContactList extends Component{
   //Adding prop-types validation on props passed to components
    static propTypes = {
        contact : PropTypes.array.isRequired,
        clickDelete:PropTypes.func.isRequired 
    }
    //Intial search text is set blank
    state ={
        query: ''
    }
    //Update the search query
    updateQuery = (query) => {
        this.setState({ query : query.trim() })
    }
    //Reset the query on clicking the showall
    clearQuery = (query) =>{
        this.setState(
            {query : ''}
        )
    }
    render(){
            //Delcaring the variables (object destructuring)
            const { contact,clickDelete } = this.props;
            const {query} = this.state;
            //Search logic
            let showingContacts;
            if(query){
                const match = new RegExp(escapeRegExp(this.state.query), 'i');
                showingContacts = contact.filter((contact ) =>match.test(contact.name) )
            }
            else{
                showingContacts = contact;
            }
            //sort the contact us list using the sortBy name object
            showingContacts.sort(sortBy('name'))
            
        return(
               <div className='list-contacts'>
                   {/* {JSON.stringify(this.state)}  */}
                    <div className='list-contacts-top'>
                    <input
                        className='search-contacts'
                        type='text'
                        placeholder='Search contacts'
                        value={query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                    </div>
                    {showingContacts.length !== contact.length && (
                              <div className='showing-contacts'>
                                <span>Now showing {showingContacts.length} of {contact.length} total</span>
                                <button onClick={this.clearQuery}>Show all</button>
                              </div>
                            )}
                    <ol className="contact-list">
                        {
                            showingContacts.map(contact => 
                                <li key={contact.id} className="contact-list-item">
                                    <div className="contact-details">
                                        <p>{contact.name}</p>
                                        <p>{contact.email}</p>
                                    </div> 
                                    <button className="contact-remove" onClick={()=>clickDelete(contact)}>
                                        Remove
                                    </button>
                                </li>
                            )
                        }

                    </ol>
            </div>
        )
    }

}

export default ContactList;

