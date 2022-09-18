<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model frontend\models\Counterparty */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="company-form">
    <div class="modal-header">
        <h5 class="modal-title" >Create company</h5>
    </div>
    <?php $form = ActiveForm::begin(['options' => ['id' => 'form-data-counterparty']]); ?>

    <?= $form->field($model, 'full_name')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>
    
    <?= $form->field($model, 'contract_id')->textInput()->label('Contract') ?>
    
    <?= $form->field($model, 'bank')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'address')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'edrpou')->textInput() ?>

    <?= $form->field($model, 'ipn')->textInput() ?>

    <div class="form-group">
        <?= Html::button('Save', ['id' => 'button-save-counterparty', 'class' => 'btn btn-outline-success']); ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
