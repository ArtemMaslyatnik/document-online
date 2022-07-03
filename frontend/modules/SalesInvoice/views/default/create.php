<?php
/* @var $this yii\web\View */
/* @var $model frontend\modules\post\models\forms\PostForm */

use yii\widgets\ActiveForm;
use yii\helpers\Html;
use yii\web\JqueryAsset;

$this->title = 'document-online';
?>

<div class="sales-invoice-documet">
    
    <h1>створити Видаткову накладну</h1>

    <?php $form = ActiveForm::begin(); ?>
    
        <!-- header -->
        <br>
        <br>
        <div class="row">
            <div class="col-2"></div>
            <label class="col-3"><strong>Видаткова накладна №</strong></label>
            <div class="col-2"><?php echo $form->field($model, 'number')->label(false); ?></div>
            <label class="col-1"><strong>від</strong></label>
            <div class="col-2"><?php echo $form->field($model, 'date')->label(false); ?></div>
        </div>
        <br>
        <br>
        <div class="row">
            <label class="col-2"><strong>Постачальник:</strong></label>
            <div class="col-10"><?php echo $form->field($model, 'company')->textInput(['placeholder' => "ООО Постачальник"])->label(false); ?></div>
        </div>
        <div class="row">
            <label class="col-2"></label>
            <div class="col-10"><?php  echo  $form->field($model, 'bank_account')->textarea(['placeholder' => "р/р 000000000000000"])->label(false); ?></div>
        </div>
        <br>
        <div class="row">
            <label class="col-2"><strong>Покупець:</strong></label>
            <div class="col-10"><?php echo $form->field($model, 'counterparty')->textInput(['placeholder' => "ООО Покупець"])->label(false); ?></div>
        </div>
        <div class="row">
            <label class="col-2"></label> 
            <div class="col-10"><?php  echo  $form->field($model, 'counterparty_bank_acc')->textarea(['placeholder' => "р/р 000000000000000"])->label(false); ?></div>
          </div>
        <br>
        <div class="row">
            <label class="col-2"><strong>Договор:</strong></label>            
            <div class="col-10"><?php echo $form->field($model, 'contract')->label(false); ?></div>
        </div>
        <!-- \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ -->
        <!-- table 
        <div class="row">
            <div class="col-sm-1 border">1</div>
            <div class="col-sm-1 border">2</div>
            <div class="col-sm-1 border">3</div>
            <div class="col-sm-1 border">4</div>
            <div class="col-sm-1 border">5</div>
            <div class="col-sm-1 border">6</div>
            <div class="col-sm-1 border">7</div>
            <div class="col-sm-1 border">8</div>
            <div class="col-sm-1 border">9</div>
            <div class="col-sm-1 border">10</div>
            <div class="col-sm-1 border">11</div>
            <div class="col-sm-1 border">12</div>
        </div> -->
        <!-- \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ -->
        <!-- header table -->
        <div class="row">
            <div class="col-md-5">
                <div class="row">
                    <div class="col-md-1"><strong>№</strong></div>
                    <div class="col-md-11"><strong>Товар</strong></div>
                </div>
            </div>
            <div class="col-md-2"><strong>Кіль-ть</strong></div>
            <div class="col-md-1"><strong>Од.</strong></div>
            <div class="col-md-2"><strong>Ціна без ПДВ</strong></div>
            <div class="col-md-2"><strong>Сума без ПДВ</strong></div>
        </div>
        <!-- \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ -->
        <!--  row -->
        <div id="sales-invoice-products"> 
            <?php foreach ($modelsSIP as $index => $modelSIP): ?>
                <div class="row">
                    <div class="col-md-5">
                        <div class="row">
                            <div class="col-md-1 p-0"><?php echo $form->field($modelSIP, "[$index]line_number")->label(false)->textInput(['value' => 1 , 'readonly' => '']) ; ?></div>
                            <div class="col-md-11 p-0"><?php echo $form->field($modelSIP, "[$index]product_id")->label(false); ?></div>
                        </div>
                    </div>
                    <div class="col-md-2 p-0"><?php echo $form->field($modelSIP, "[$index]quantity")->label(false)->textInput(['type' => 'number', 'step'=>'0.001']); ?></div>
                    <div class="col-md-1 p-0"><?php echo $form->field($modelSIP, "[$index]unit_id")->label(false); ?></div>
                    <div class="col-md-2 p-0"><?php echo $form->field($modelSIP, "[$index]price")->label(false)->textInput(['type' => 'number', 'step'=>'0.01']); ?></div>
                    <div class="col-md-2">
                        <div class="row">
                            <div class="col-md-10 p-0"><?php echo $form->field($modelSIP, "[$index]amount_total")->label(false)->textInput(['type' => 'number', 'step'=>'0.01']); ?></div>
                            <div class="col-md-2 p-0"><?= Html::button('-', ['id' => 'button-delete-row', 'name' => 'delete-row', 'class' => 'btn btn-danger']) ?></div>
                        </div>
                    </div>                    
                </div>
            <?php endforeach; ?>
        </div>
        <div class="form-group">
            <?= Html::button('+', ['id' => 'button-add-row', 'name' => 'add-row', 'class' => 'btn btn-success']) ?>
         </div>
        <!-- \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ -->
        <!--  footer table -->
        <div class="row">
            <div class="col-9"></div>
            <div class="col-2"><strong>Всього:</strong></div>
            <div class="col-1"><strong id="document-amount-total"></strong></div>
        </div>
        <div class="row">
            <div class="col-9"><strong id="count-line-product-total">Всього найменувань 1.</strong></div>
            <div class="col-2"><strong>Сума ПДВ:</strong></div>
            <div class="col-1"><strong id="document-vat"></strong></div>
        </div>
        <div class="row">
            <div class="col-9"></div>
            <div class="col-2"><strong>Всього з ПДВ:</strong></div>
            <div class="col-1"><strong  id="document-total"></strong></div>
        </div>
        <br>
        <div class="row">
            <div class="col-12"></div>
        </div>  
        <div class="row">
            <div class="col-12"></div>
        </div> 
        <br>
        <!-- footer -->
        <div class="row">
            <div class="col-3"><strong>Від постачальника:</strong></div>
            <div class="col-3"><?php echo $form->field($model, 'authority_manager')->label(false); ?></div>
            <div class="col-3"><strong>Отримав(ла)</strong></div>
            <div class="col-3"><?php echo $form->field($model, 'authority_counterparty')->label(false); ?></div>
        </div> 
        <div class="row">
            <div class="col-5"></div>
            <div class="col-2"><strong>За довіреністю №</strong></div>
            <div class="col-2"><?php echo $form->field($model, 'proxy_number')->label(false); ?></div>
            <div class="col-1"><strong>від</strong></div>
            <div class="col-2"><?php echo $form->field($model, 'proxy_date')->label(false); ?></div>
        </div>
        
    <div class="form-group">
        <?= Html::submitButton('Create', ['class' => 'btn btn-success']) ?>
    </div>    
    <?php ActiveForm::end(); ?>        
</div>


<?php $this->registerJsFile('@web/js/SalesInvoice.js', [
    'depends' => JqueryAsset::className(),
]);