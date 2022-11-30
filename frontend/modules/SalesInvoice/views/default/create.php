<?php
/* @var $this yii\web\View */
/* @var $model frontend\modules\post\models\forms\PostForm */

use yii\widgets\ActiveForm;
use yii\helpers\Html;
use yii\web\JqueryAsset;
use kartik\select2\Select2;
use kartik\datetime\DateTimePicker;



$this->title = 'document-online';
?>

<div class="sales-invoice-documet">
   
    <?php $form = ActiveForm::begin(); ?>
    <h1>створити Видаткову накладну</h1>
    <!-- ////////////////////////////////////////////////////////////////Modal /////////////////////////////////////-->
    <div class="modal fade bd-example-modal-lg" id="modal-list" tabindex="-1" role="dialog" aria-labelledby="buton-add-company-Label" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-body">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                   </div>
            </div>
        </div>
    </div>
    
    
    <!-- ////////////////////////////////////////////////////////////////Modal /////////////////////////////////////-->
    
        <!-- header -->
        <br>
        <br>
        <div class="row">
            <label class="col-3"><strong>Видаткова накладна №</strong></label>
            <div class="col-2"><?php echo $form->field($model, 'number')->label(false); ?></div>
            <label class="col-1"><strong>від</strong></label>
            <div class="col-3"><?php echo $form->field($model, 'date')->widget(DateTimePicker::className(), [
                                        'type' => DateTimePicker::TYPE_COMPONENT_APPEND,
                                        'pluginOptions' => [
                                            'language' => 'ru',                                            
                                            'autoclose' => true,
                                            'format' => 'dd:mm:yyyy hh:ii:ss',
                                            'save'
                                          ]
                                    ])->label(false); ?></div> 
        </div>
        <br>
        <br>
        <div class="row">
            <label class="col-2"><strong>Постачальник:</strong></label>
            <div class="col-10"><?php echo $form->field($model, 'company')->widget(Select2::classname(), [
                                    'data' => $model->getСompanyList(),
                                    'options' => ['placeholder' => 'Постачальник ...'],
                                    'pluginOptions' => [
                                        'allowClear' => true
                                    ],
                                    'addon' => [
                                        'append' => [
                                            'content' => Html::button('+', ['id' => 'button-list-company','class' => 'btn btn-outline-success',]),
                                            'asButton' => true
                                        ]
                                    ],
                                ])->label(false);?></div>
        </div>
        <div class="row">
            <label class="col-2"></label>
            <div class="col-10"><?php  echo  $form->field($model, 'bank_account')->textarea(['placeholder' => "р/р 000000000000000"])->label(false); ?></div>
        </div>
        <br>
        <div class="row">
            <label class="col-2"><strong>Покупець:</strong></label>
            <div class="col-10"><?php echo $form->field($model, 'counterparty')->widget(Select2::classname(), [
                                    'data' => $model->getСounterpartyList(),
                                    'options' => ['placeholder' => 'Покупець ...'],
                                    'pluginOptions' => [
                                        'allowClear' => true
                                    ],
                                    'addon' => [
                                        'append' => [
                                            'content' => Html::button('+', ['id' => 'button-list-counterparty','class' => 'btn btn-outline-success',]),
                                            'asButton' => true
                                        ]
                                    ],
                                ])->label(false);?></div>
        </div>
        <div class="row">
            <label class="col-2"></label> 
            <div class="col-10"><?php  echo  $form->field($model, 'counterparty_bank_acc')->textarea(['placeholder' => "р/р 000000000000000"])->label(false); ?></div>
          </div>
        <br>
        <div class="row">
            <label class="col-2"><strong>Договор:</strong></label>
            <div class="col-10"><?php echo $form->field($model, 'contract')->widget(Select2::classname(), [
                                    'data' => $model->getContractList(),
                                    'options' => ['placeholder' => 'Договор ...'],
                                    'pluginOptions' => [
                                        'allowClear' => true
                                    ],
                                    'addon' => [
                                        'append' => [
                                            'content' => Html::button('+', ['id' => 'button-list-contract','class' => 'btn btn-outline-success',]),
                                            'asButton' => true
                                        ]
                                    ],
                                ])->label(false);?></div>
        </div>
        <!-- \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ -->
        <!-- table 
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
                            <div class="col-md-2 p-0"><?= Html::button('-', ['id' => 'button-delete-row', 'name' => 'delete-row', 'class' => 'btn btn-outline-secondary']) ?></div>
                        </div>
                    </div>                    
                </div>
            <?php endforeach; ?>
        </div>
        <div class="form-group">
            <?= Html::button('+', ['id' => 'button-add-row', 'name' => 'add-row', 'class' => 'btn btn-outline-success']) ?>
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
        <?= Html::submitButton('Create', ['class' => 'btn btn-outline-success']) ?>
    </div>    
    <?php ActiveForm::end(); ?>        
</div>


<?php $this->registerJsFile('@web/js/SalesInvoice.js', [
    'depends' => JqueryAsset::className(),
]);