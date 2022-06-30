<?php

use yii\helpers\Html;

?>
<div class="sales-invoice-documet" id="sales-invoice-documet" >

    <!-- header -->
    <br>
    <br>
    <div class="row">
        <div class="col-2"></div>
        <label class="col-3"><strong>Видаткова накладна №</strong></label>
        <div class="col-2"><strong><?= $model->number; ?></strong></div>
        <label class="col-1"><strong>від</strong></label>
        <div class="col-2"><strong><?= $model->date; ?></strong></div>
    </div>
    <br>
    <br>
    <div class="row">
        <label class="col-2"><strong>Постачальник:</strong></label>
        <div class="col-10"><?= $model->company; ?></div>
    </div>
    <div class="row">
        <label class="col-2"></label>
        <div class="col-10"><?= $model->bankAccount; ?></div>
    </div>
    <br>
    <div class="row">
        <label class="col-2"><strong>Покупець:</strong></label>
        <div class="col-10"><?= $model->counterparty; ?></div>
    </div>
    <div class="row">
        <label class="col-2"></label> 
        <div class="col-10"><?= $model->counterpartyBankAcc; ?></div>
    </div>
    <br>
    <div class="row">
        <label class="col-2"><strong>Договор:</strong></label>            
        <div class="col-10"><?= $model->contract; ?></div>
    </div>
    <!-- \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ -->
    <!-- table  -->
    <br>
    <br>
    <!-- \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ -->
    <!-- header table -->
    <!--  row -->
    <div class="row">
        <div class="col-md-6 border">
            <div class="row">
                <div class="col-md-1 "><strong>№</strong></div>
                <div class="col-md-11"><strong>Товар</strong></div>
            </div>
        </div>
        <div class="col-md-1 border"><strong>Кіль-ть</strong></div>
        <div class="col-md-1 border"><strong>Од.</strong></div>
        <div class="col-md-2 border"><strong>Ціна без ПДВ</strong></div>
        <div class="col-md-2 border"><strong>Сума без ПДВ</strong></div>
    </div>
    <!-- \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ -->
    <!--  row -->
<?php foreach ($modelsIP as $modelIP): ?>
        <div class="row">
            <div class="col-md-6">
                <div class="row">
                    <div class="col-md-1 border"><?= $modelIP->lineNumber ?></div>
                    <div class="col-md-11 border"><?= $modelIP->product; ?></div>
                </div>
            </div>
            <div class="col-md-1 border"><?= $modelIP->quantity; ?></div>
            <div class="col-md-1 border"><?= $modelIP->unit; ?></div>
            <div class="col-md-2 border"><?= number_format($modelIP->price, 2, '.', ''); ?></div>
            <div class="col-md-2 border"><?= $modelIP->amountTotal; ?></div>                    
        </div>
<?php endforeach; ?>
    <!-- \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ -->
    <br>
    <!--  footer table -->
    <div class="row">
        <div class="col-8"></div>
        <div class="col-2">Всього:</div>
        <div class="col-1"><?= $sum['sum'] ?></div>
    </div>
    <div class="row">
        <div class="col-8">Всього найменувань <?= $sum['countLineProductTotal'] ?>.</div>
        <div class="col-2">Сума ПДВ:</div>
        <div class="col-1"><?= $sum['vat'] ?></div>
    </div>
    <div class="row">
        <div class="col-8"></div>
        <div class="col-2"><strong>Всього з ПДВ:</strong></div>
        <div class="col-1"><strong><?= $sum['total'] ?></strong></div>
    </div>
    <br>
    <div class="row">
        <div class="col-12"><strong><?= $sum['num2text'] ?></strong></div>
    </div>  
    <div class="row">
        <div class="col-12">у т.ч. ПДВ: <strong><?= $sum['numVAT2text'] ?></strong></div>
    </div> 
    <br>
    <!-- footer -->
    <br>
    <br>
    <br>
    <div class="row">
        <div class="col-3">Від постачальника:</div>
        <div class="col-3"><?= $model->authorityManager; ?></div>
        <div class="col-3">Отримав(ла)</div>
        <div class="col-3"><?= $model->authorityCounterparty; ?></div>
    </div> 
    <div class="row">
        <div class="col-5"></div>
        <div class="col-2">За довіреністю №</div>
        <div class="col-2"><?= $model->proxyNumber ?></div>
        <div class="col-1">від </div>
        <div class="col-2"><?= $model->proxyDate ?></div>
    </div>
</div>
<div class="form-group">
    <?= Html::button('Печать', ['id' => 'print-sales-invoice-document', 'name' => 'print-sales-invoice', 'class' => 'btn btn-success d-print-none', 'onclick' => 'window.print()']) ?>
</div>
