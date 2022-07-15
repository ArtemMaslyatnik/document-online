//SalesInvoice
//add row products 
$(document).ready(function () {
    $('#button-add-row').on('click', function () {
        // перевести в общюю соблюдать очередность функций
        let elem = $("#sales-invoice-products").children('div');
        $('#count-line-product-total').text('Всього найменувань ' + (elem.length+1) +'.');
      
        console.log(1);
        $("#sales-invoice-products").append(stringNewRowProduct(elem.length));

    });
 });
 
 //delete row products 
$(document).ready(function () {
     $('#sales-invoice-products').on('click', '.btn-outline-secondary', function() {
         
        $(this).parent().parent().parent().parent().remove();
        
         // !!!!!!!!перевести в общюю
        var elem = $("#sales-invoice-products").children('div');
        $('#count-line-product-total').text('Всього найменувань ' + (elem.length) +'.');
 
    });
 });
 



//view list company 
$(document).ready(function () {
    $('#button-list-company').on('click', function () {
        
    $('#modal-list-company').modal('show');
    $('#modal-list-company').find('.modal-body').load('../../catalog/company/index');

    });     
});

// create company 
$(document).ready(function () {
        $('#modal-list-company').on('click', '#button-create-company', function(event) { 
        $('#modal-list-company').modal('show');
        $('#modal-list-company').find('.modal-body').load('../../catalog/company/create');
    });     
});

//save company
$(document).ready(function () {
    $('#modal-list-company').on('click', '#button-save-company', function(event) { 

        event.preventDefault();
        var data = $('#form-data-company').serialize();
        $.ajax({      
            url: '../../catalog/company/create',
            type: 'POST',
            data: data,
            dataType: 'json',
            beforeSend: function () {
            },
            complete: function () {
            },
            success: function (json) {
                $('#modal-list-company').modal('hide'); 
                $('#salesinvoiceform-company').val($(this).attr(json.id));
                $('#select2-salesinvoiceform-company-container').text(json.name);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(thrownError + xhr.statusText + +xhr.responseText);
            },
            timeout: 10000
        });
        $('#button-add-education-form').show();
    });
});

//search company
$(document).ready(function () {
    $('#modal-list-company').on('click', '#btn-search', function(event) { 

        event.preventDefault();
        var data = $('#modal-list-company input[name=\'CompanySearch[name]\'], #modal-list-company input[name=\'CompanySearch[id]\']');
        $.ajax({      
            url: '../../catalog/company/resulte',
            type: 'GET',
            data: data,
            dataType: 'json',
            beforeSend: function () {
            },
            complete: function () {
            },
            success: function (json) {
                console.log(json);
                $('#list-company-result').empty();
                let aa = stringSearchRowProduct(json);
                console.log(aa);
                $('#list-company-result').append(aa);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(thrownError + xhr.statusText + +xhr.responseText);
            },
            timeout: 10000
        });
        $('#button-add-education-form').show();
    });
});

//close modal insert company
$(document).ready(function () {
    $('#modal-list-company').on('click', '.insert-link-company', function(event) { 
        event.preventDefault();
        $('#salesinvoiceform-company').val($(this).attr('data-kay'));
        $('#select2-salesinvoiceform-company-container').text($(this).text());
        $('#modal-list-company').modal('hide'); 
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

function stringNewRowProduct(i) {
     
    return '<div class="row">'
    +    '<div class="col-md-5">'
    +        '<div class="row">'
    +            '<div class="col-md-1 p-0"><div class="form-group field-salesinvoiceproduct-' + i + '-linenumber">'
    +                '<input type="text" id="salesinvoiceproduct-' + i + '-linenumber" class="form-control" name="SalesInvoiceProduct[' + i + '][lineNumber]" value=' + (i === 1 ? 2 : i+1) + ' readonly="" >'
    +                '<div class="help-block"></div></div></div>'
    +            '<div class="col-md-11 p-0"><div class="form-group field-salesinvoiceproduct-' + i + '-product">'
    +                '<input type="text" id="salesinvoiceproduct-' + i + '-product" class="form-control" name="SalesInvoiceProduct[' + i + '][product]">'
    +                '<div class="help-block"></div></div></div></div></div>'
    +    '<div class="col-md-2 p-0">'
    +        '<div class="form-group field-salesinvoiceproduct-' + i + '-quantity">'
    +            '<input type="number" id="salesinvoiceproduct-' + i + '-quantity" class="form-control" name="SalesInvoiceProduct[' + i + '][quantity]" step="0.001">'
    +            '<div class="help-block"></div></div></div>'
    +    '<div class="col-md-1 p-0"><div class="form-group field-salesinvoiceproduct-' + i + '-unit">'
    +            '<input type="text" id="salesinvoiceproduct-' + i + '-unit" class="form-control" name="SalesInvoiceProduct[' + i + '][unit]">'
    +            '<div class="help-block"></div></div></div>'
    +    '<div class="col-md-2 p-0"><div class="form-group field-salesinvoiceproduct-' + i + '-price">'
    +            '<input type="number" id="salesinvoiceproduct-' + i + '-price" class="form-control" name="SalesInvoiceProduct[' + i + '][price]" step="0.01">'
    +            '<div class="help-block"></div></div></div>'
    +    '<div class="col-md-2">'
    +        '<div class="row">'
    +            '<div class="col-md-10 p-0"><div class="form-group field-salesinvoiceproduct-' + i + '-amounttotal">'  
    +                '<input type="number" id="salesinvoiceproduct-' + i + '-amounttotal" class="form-control" name="SalesInvoiceProduct[' + i + '][amountTotal]" step="0.01">'
    +                '<div class="help-block"></div></div></div>'
    +            '<div class="col-md-2 p-0"><button type="button" id="button-delete-row" class="btn btn-outline-secondary" name="delete-row">-</button></div>'  
    +     '</div></div></div>';
  
   }

function stringSearchRowProduct(json) {
    
    let htmlText ='';
    for (key in json) {
        htmlText += '<div class="row" data-key="'+ json[key].id +'">'
                +       '<div class="col-lg-1">'+ json[key].id +'<br></div>'
                +       '<div class="col-lg-8"><a class="insert-link-company" href="/document-online/frontend/web/company/#?id='+ json[key].id +'" data-kay="'+ json[key].id +'" onclick="return false">'+ json[key].name +'</a><br></div>'
                +       '<div class="col-lg-3">'+ json[key].edrpou +'<br></div>'
                +   '</div>';
    }

    return htmlText;
}


