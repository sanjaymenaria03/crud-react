import React, { useEffect, useState } from 'react';
import { Table, Card, Image, Button, } from 'react-bootstrap';
import FirestoreService from '../utils/services/FirestoreService';
function Menu(props) {
    const [menuItems, setMenuItems] = useState([]);
   useEffect(() => {
      FirestoreService.getAllMenuItems().then((response) => {
          setMenuItems(response._delegate._snapshot.docChanges);
      }).catch((e) => {
          alert("Error occured while fetching the menu item. " + e);
      })
   }, [])
return (
<>
<Card style={{ margin: 24 }}>
<Card.Header className="d-flex justify-content-between align-items-center">
<div className="align-items-center" style={{ marginRight: 8 }}>
<Image src={'https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Nandos_logo.svg/1200px-Nandos_logo.svg.png'} style={{ width: 150 }} />
<p style={{ marginTop: 8, fontSize: 12, color: '#A1A1A1' }}>udaipur,rajasthan(313002)</p>
</div>
<Button style={{ backgroundColor: '#BD2B2B', borderWidth: 0, }}>Place Order</Button>
</Card.Header>
<Card.Body>
<Table responsive>
<thead>
<tr>
<th>#</th>
<th>Item Name</th>
<th>Category</th>
<th>Price (USD)</th>
</tr>
</thead>
<tbody>
{(menuItems) && (menuItems.map((menuItem, index) => (
<tr key={index}>
   <td>{index + 1}</td>
   <td>{menuItem.doc.data.value.mapValue.fields.itemName.stringValue}
   </td>
   <td>{menuItem.doc.data.value.mapValue.fields.itemCategory.stringValue}
   </td>
   <td>{menuItem.doc.data.value.mapValue.fields.itemPrice.doubleValue}
   </td>
</tr>
)))}
</tbody>
</Table>
</Card.Body>
<Card.Footer className="d-flex justify-content-between align-items-center">
{/* <p style={{ marginTop: 8, fontSize: 12, color: '#A1A1A1' }}>© 2022 Nandos</p> */}
<p style={{ marginTop: 8, fontSize: 12, color: '#A1A1A1' }}><a href="/Login">Admin Login</a> • <a href="#">Privacy Policy</a> • <a href="#">Directions</a> • <a href="#">Contact Us</a></p>
</Card.Footer>
</Card>
</>
);
}
export default Menu;