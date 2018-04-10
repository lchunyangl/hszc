<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNavTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('nav', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 20)->default('')->comment('导航名');
            $table->tinyInteger('type')->default(0)->comment('导航位置，0顶部，1中间，2底部')->index('type');
            $table->tinyInteger('is_show')->default(0)->comment('是否显示')->index('is_show');
            $table->tinyInteger('is_open')->default(0)->comment('是否新窗口打开');
            $table->string('url')->default('')->comment('url路径');
            $table->tinyInteger('sort_order')->default(0)->comment('排序')->index('sort_order');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('nav');
    }
}
