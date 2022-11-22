let apiProductApi = new TempApi.ProductApi();import TempApi from '../src/index';let product = new TempApi.Product();document.getElementById('iuf72i').onclick = (event) => {
    event.preventDefault();
    product['pImage'] = {
        data: document.querySelector("[annotationname = 'pImage']").getAttribute("data-image-base64") !== null ? document.querySelector("[annotationname = 'pImage']").getAttribute("data-image-base64") : document.querySelector("[annotationname = 'pImage']").src,
        name: document.querySelector("[annotationname = 'pImage']").getAttribute("name")
      };
      product['pName'] = document.querySelector("[annotationname = 'pName']").textContent;apiProductApi.createproduct( product, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); {  location.href= '/Product/'+response.body.query._id+'' ;}}});};window.onload = () => {};