<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

use kartik\select2\Select2;
use kartik\datetime\DateTimePicker;
use yii\web\JqueryAsset;

/* @var $this yii\web\View */
/* @var $model frontend\modules\catalog\models\Contract */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="contract-form">

    <?php $form = ActiveForm::begin(); ?>

    <?php echo $form->field($model, 'date')->widget(DateTimePicker::className(), [
                                        'type' => DateTimePicker::TYPE_COMPONENT_APPEND,
                                        'pluginOptions' => [
                                            'language' => 'ru',                                            
                                            'autoclose' => true,
                                            'format' => 'dd:mm:yyyy',
                                            'save'
                                          ]
                                    ]); ?>

    <?= $form->field($model, 'number')->textInput(['maxlength' => true]) ?>

    <?php echo $form->field($model, 'counterparty')->widget(Select2::classname(), [
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

    <?= $form->field($model, 'type_contract')->textInput() ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>


<?php $this->registerJsFile('@web/js/SalesInvoice.js', [
    'depends' => JqueryAsset::className(),
]);