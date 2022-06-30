//SalesInvoice
//add row products 
$(document).ready(function () {
    $('#button-add-row').on('click', function () {
        // перевести в общюю соблюдать очередность функций
        var elem = $("#sales-invoice-products").children('div');
        $('#count-line-product-total').text('Всього найменувань ' + (elem.length+1) +'.');
       
        
        $("#sales-invoice-products").append(stringNewRewProduct(elem.length));


    });
 });
 
 //delete row products 
$(document).ready(function () {
     $('#sales-invoice-products').on('click', '.btn-danger', function() {
         
        $(this).parent().parent().parent().parent().remove();
        
         // !!!!!!!!перевести в общюю
        var elem = $("#sales-invoice-products").children('div');
        $('#count-line-product-total').text('Всього найменувань ' + (elem.length) +'.');
        

    });
 });
 
 //set amounttotal
$(document).ready(function () {
     $('#sales-invoice-products').on('input', '.form-control', function() {

       let arr = $(this).attr("id").split('-');
       if (arr[2] === "quantity") {
           let quantity  = $(this).val();
           let price  = $('#salesinvoiceproducts-'+ arr[1]+'-price').val();
           let sum = quantity * price;
           $('#salesinvoiceproducts-'+ arr[1]+'-amounttotal').val(sum.toFixed(2));
           setAmountTotalDocument(); 
       } else if (arr[2] === "price") {
           let quantity  = $('#salesinvoiceproducts-'+ arr[1]+'-quantity').val();
           let price  = $(this).val(); 
           let sum = quantity * price;
           $('#salesinvoiceproducts-'+ arr[1]+'-amounttotal').val(sum.toFixed(2));
           setAmountTotalDocument();
       }
        

    });
 });
 
function setAmountTotalDocument() {
    let i= 0;
    let sum =0;
    while (true) {
      if ($('#salesinvoiceproducts-'+ i +'-amounttotal').val() === undefined) {
        break;  
      }
      sum += Number($('#salesinvoiceproducts-'+ i +'-amounttotal').val());
      console.log(sum);
      i++;
    }
    $('#document-amount-total').text(sum.toFixed(2));
    let vat = sum / 100 * 20;
    let total = vat +sum;
    $('#document-vat').text(vat.toFixed(2));
    $('#document-total').text(total.toFixed(2));
}

function stringNewRewProduct(i) {
     
    return '<div class="row">'
    +    '<div class="col-md-5">'
    +        '<div class="row">'
    +            '<div class="col-md-1 p-0"><div class="form-group field-salesinvoiceproducts-' + i + '-linenumber">'
    +                '<input type="text" id="salesinvoiceproducts-' + i + '-linenumber" class="form-control" name="SalesInvoiceProducts[' + i + '][lineNumber]" value=' + (i === 1 ? 2 : i+1) + ' readonly="" >'
    +                '<div class="help-block"></div></div></div>'
    +            '<div class="col-md-11 p-0"><div class="form-group field-salesinvoiceproducts-' + i + '-product">'
    +                '<input type="text" id="salesinvoiceproducts-' + i + '-product" class="form-control" name="SalesInvoiceProducts[' + i + '][product]">'
    +                '<div class="help-block"></div></div></div></div></div>'
    +    '<div class="col-md-2 p-0">'
    +        '<div class="form-group field-salesinvoiceproducts-' + i + '-quantity">'
    +            '<input type="number" id="salesinvoiceproducts-' + i + '-quantity" class="form-control" name="SalesInvoiceProducts[' + i + '][quantity]" step="0.001">'
    +            '<div class="help-block"></div></div></div>'
    +    '<div class="col-md-1 p-0"><div class="form-group field-salesinvoiceproducts-' + i + '-unit">'
    +            '<input type="text" id="salesinvoiceproducts-' + i + '-unit" class="form-control" name="SalesInvoiceProducts[' + i + '][unit]">'
    +            '<div class="help-block"></div></div></div>'
    +    '<div class="col-md-2 p-0"><div class="form-group field-salesinvoiceproducts-' + i + '-price">'
    +            '<input type="number" id="salesinvoiceproducts-' + i + '-price" class="form-control" name="SalesInvoiceProducts[' + i + '][price]" step="0.01">'
    +            '<div class="help-block"></div></div></div>'
    +    '<div class="col-md-2">'
    +        '<div class="row">'
    +            '<div class="col-md-10 p-0"><div class="form-group field-salesinvoiceproducts-' + i + '-amounttotal">'  
    +                '<input type="number" id="salesinvoiceproducts-' + i + '-amounttotal" class="form-control" name="SalesInvoiceProducts[' + i + '][amountTotal]" step="0.01">'
    +                '<div class="help-block"></div></div></div>'
    +            '<div class="col-md-2 p-0"><button type="button" id="button-delete-row" class="btn btn-danger" name="delete-row">-</button></div>'  
    +     '</div></div></div>';
  
   }
