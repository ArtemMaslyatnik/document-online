<?php

use yii\helpers\Url;
/** @var yii\web\View $this */

$this->title = 'document-online';
?>
<div class="site-index">

    <div class="jumbotron text-center bg-transparent">
        <h1 class="display-4">Створи первиннi документи online</h1>

        <p class="lead">Ми працюємо заради розвитку українського підприємництва</p>

    </div>

    <div class="body-content">

        <div class="row">
            <div class="col-lg-4">
                <h2>Видаткова накладна</h2>
                    <p>Створити видаткову накладну</p>

                <p><a class="btn btn-outline-secondary" href="<?= Url::to(['SalesInvoice/default/create']); ?>">Видаткова накладна &raquo;</a></p>
            </div>
            <div class="col-lg-4">
                <h2>ТТН</h2>
                    <p>Створити ТТН</p>

                <p><a class="btn btn-outline-secondary" href="#">ТТН &raquo;</a></p>
            </div>
            <div class="col-lg-4">
                <h2>Рахунок-фактура</h2>
                    <p>Створити рахунок-фактуру</p>
                <p><a class="btn btn-outline-secondary" href="#">Рахунок-фактуру &raquo;</a></p>
            </div>
        </div>

    </div>
</div>
