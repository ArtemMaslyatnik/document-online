<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model frontend\modules\catalog\models\CounterpartySearch */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="counterparty-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?= $form->field($model, 'id') ?>

    <?= $form->field($model, 'user_id') ?>

    <?= $form->field($model, 'contract_id') ?>

    <?= $form->field($model, 'full_name') ?>

    <?= $form->field($model, 'name') ?>

    <?php // echo $form->field($model, 'bank') ?>

    <?php // echo $form->field($model, 'address') ?>

    <?php // echo $form->field($model, 'edrpou') ?>

    <?php // echo $form->field($model, 'ipn') ?>

    <div class="form-group">
        <?= Html::submitButton('Search', ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton('Reset', ['class' => 'btn btn-outline-secondary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
