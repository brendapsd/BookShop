import React from 'react';
import './Filter.css';


function Filter() {
  return (
    <div className="Filter">
      <div class="content-top-br">
				<div class=" row ">
					<div class="breadcrumd-left col-xs-12 col-sm-12 col-md-6">
						<div class="breadcrumb title_font clearfix"> 
							<a class="home" href="https://demo.fieldthemes.com/bookshop/home1/" title="Volver a Inicio">
								<span class="title">
									Home
								</span>
							</a> 
						<span class="navigation-pipe">
							<i class="icon-chevron-right"></i>
						</span> 
							Auto &amp; Bike
					</div>
				</div>
			<div class="breadcrumd-right col-xs-12 col-12 col-md-6">
				<div class="content_sortPagiBar container clearfix">
					<div class="top-pagination-content sortPagiBar clearfix">
						<ul class="display hidden-xs">
							<li id="grid" class="selected">
								<a rel="nofollow" href="https://demo.fieldthemes.com/bookshop/home1/es/14-auto#" title="Cuadrícula">
									<i class="icon-th-large"></i>
								</a>
							</li>
							<li id="list">
								<a rel="nofollow" href="https://demo.fieldthemes.com/bookshop/home1/es/14-auto#" title="Lista">
									<i class="icon-th-list"></i>
								</a>
							</li>
						</ul>
						<form id="productsSortForm" action="https://demo.fieldthemes.com/bookshop/home1/es/14-auto" class="productsSortForm">
							<div class="select selector1"> 
								<label for="selectProductSort">
									Sort by:
								</label> 
							<div class="selector" id="uniform-selectProductSort">
								<span >
									--
								</span>
								<select id="selectProductSort" class="selectProductSort form-control">
									<option value="position:desc" selected="selected">
										--
									</option>
									<option value="price:asc">
										Precio: más baratos primero
									</option>
									<option value="price:desc">
										Precio: más caros primero
									</option>
									<option value="name:asc">
										Nombre: de A a Z
									</option>
									<option value="name:desc">
										Nombre: de Z a A
									</option>
									<option value="quantity:desc">
										En inventario primero
									</option>
									<option value="reference:asc">
										Referencia: más bajo primero
									</option>
									<option value="reference:desc">
										Referencia: más alto primero
									</option> 
								</select>
							</div>
						</div>
					</form>
					<form action="https://demo.fieldthemes.com/bookshop/home1/es/14-auto" method="get" class="nbrItemPage">
						<div class="clearfix selector1"> 
							<label for="nb_item"> 
								Show: 
							</label> 
							<input type="hidden" name="id_category" value="14"/> 
							<div class="selector" id="uniform-nb_item" >
								<span>9</span>
								<select name="n" id="nb_item" class="form-control">
									<option value="9" selected="selected">
										9
									</option>
									<option value="18">
										18
									</option> 
								</select>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
    </div>
  );
}

export default Filter;