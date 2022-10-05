<?php

/** @var yii\web\View $this */

use yii\helpers\Html;
use yii\bootstrap4\ActiveForm;
use kartik\select2\Select2;
use yii\web\JqueryAsset;

$this->title = 'settings';
$this->params['breadcrumbs'][] = $this->title;
?>

<?php $form = ActiveForm::begin(['id' => 'site-settings-form']); ?>

<label class="col-2"><strong>Сompany</strong></label>
<div class="col-10"><?php
    echo $form->field($model, 'company')->widget(Select2::classname(), [
        'data' => $model->getCompanyList(),
        'options' => ['placeholder' => 'Постачальник ...'],
        'pluginOptions' => [
            'allowClear' => true
        ],
        'addon' => [
            'append' => [
                'content' => Html::button('+', ['id' => 'button-list-company', 'class' => 'btn btn-outline-success',]),
                'asButton' => true
            ]
        ],
    ])->label(false);
    ?></div>
<?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>

<?php ActiveForm::end(); ?>


<?php $this->registerJsFile('@web/js/SalesInvoice.js', [
    'depends' => JqueryAsset::className(),
]);