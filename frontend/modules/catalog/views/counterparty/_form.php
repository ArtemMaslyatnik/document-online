<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model frontend\modules\catalog\models\Counterparty */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="counterparty-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'contract_id')->textInput()->label('Contract') ?>

    <?= $form->field($model, 'full_name')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'bank')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'address')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'edrpou')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'ipn')->textInput(['maxlength' => true]) ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
