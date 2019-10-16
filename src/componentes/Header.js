import React from 'react';
import './Header.css';
// import { Button, Menu, MenuItem }  from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import Link from '@material-ui/core/Link';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles(theme => ({
//   link: {
//     margin: theme.spacing(1),
//   },
// }));

// // This resolves to nothing and doesn't affect browser history
// const dudUrl = 'javascript:;';

function Header() {

//   const classNameNamees = useStyles();

  return (
    <div className="Header">
      <div className="header-container"> 
				<header id="header">
					<div className="nav">
						<div className="container">
							<div className="row"> 
								<nav>
									<div id="languages-block-top" className="languages-block">
										<div className="current"> 
											<img src="https://demo.fieldthemes.com/bookshop/home1/img/l/3.jpg" alt="es" width="16" height="11"/>
                    </div>
                    <ul id="first-languages" className="languages-block_ul toogle_content">
											<li> 
											  <a href="#javascript" title="English (English)" rel="alternate" hreflang="en"> 
											  <img src="https://demo.fieldthemes.com/bookshop/home1/img/l/1.jpg" alt="en" width="16" height="11"/> <span>English</span> 
                        </a>
                      </li>
                      <li> 
											  <a href="#javascript" title="Français (French)" rel="alternate" hreflang="fr"> 
											  <img src="https://demo.fieldthemes.com/bookshop/home1/img/l/2.jpg" alt="fr" width="16" height="11"/> 
											  <span>Français</span> 
											  </a>
											</li>
											<li className="selected"> 
												<span> 
													<img src="https://demo.fieldthemes.com/bookshop/home1/img/l/3.jpg" alt="es" width="16" height="11"/> 
														<span>Español</span> 
												</span>
											</li>
											<li> 
												<a href="https://demo.fieldthemes.com/bookshop/home1/it/14-auto" title="Italiano (Italian)" rel="alternate" hreflang="it"> 
													<img src="https://demo.fieldthemes.com/bookshop/home1/img/l/4.jpg" alt="it" width="16" height="11"/> 
													<span>Italiano</span> 
												</a>
											</li>
										</ul>
									</div>
									<div id="mobile_links">
										<div className="current">
										  <span className="cur-label">
												mi cuenta
											</span>
										</div>
									<ul id="header_links">
										<li> 
										  <a className="link-myaccount" href="#ja" title="Cuenta"> 
												My Account
											</a>
										</li>
									  <li> 
                      <a className="link-wishlist wishlist_block" href="#ja" title="Mi lista de deseos"> 
                        Mi lista de deseos
                      </a>
										</li>
										<li> 
									    <a className="link-compare" href="#ja" title="My Compare"> My compare
											</a>
										</li>
										<li className="last"> 
											<a className="link-login" href="#ja" title="Iniciar Sesión" rel="nofollow"> 
												Iniciar Sesión
												</a>
										</li>
									</ul>
								</div>
							<div id="currencies-block-top">
								<form id="setCurrency" action="https://demo.fieldthemes.com/bookshop/home1/es/14-auto" method="post">
									<div className="current"> 
										<input type="hidden" name="id_currency" id="id_currency" value=""/> 
											<input type="hidden" name="SubmitCurrency" value=""/> 
												<span className="cur-label">

												</span> 
												<strong>EUR</strong>
									</div>
										<ul id="first-currencies" className="currencies_ul toogle_content">
										  <li> 
											  <a href="#avascript:setCurrency(1);" rel="nofollow" title="Dollar (USD)"> Dollar (USD) </a>
											</li>
											<li className="selected"> 
												<a href="#avascript:setCurrency(2);" rel="nofollow" title="Euro (EUR)"> Euro (EUR) </a>
																				</li>
																			</ul>
																		</form>
																	</div>
																	<div className="welcome-text">
																		<p>Default welcome msg!</p>
																	</div>
																</nav>
															</div>
														</div>
													</div>
													<div className="header_bottom">
														<div className="container">
															<div className="row">
																<div id="header_logo" className="col-xs-12 col-sm-12 col-md-3"> 
																	<a href="#ja" title="bookshop_home1"> 
																		<img className="logo img-responsive" src="https://demo.fieldthemes.com/bookshop/home1/img/logo.jpg" alt="bookshop_home1" width="216" height="65"/> 
																	</a>
																</div>
																<div id="sticky_top" className="col-xs-12 col-sm-12 col-md-9">
																	<div id="search_block_top">
																		<div className="field-search">
																			<form method="get" action="https://demo.fieldthemes.com/bookshop/home1/es/search" id="searchbox"> 
																				<input type="hidden" name="controller" value="search"/>
																				<div className="input-group-btn search_filter title_font"> 
																					<select name="category_filter" id="category_filter">
																						<option value="0">
																							All Categories
																						</option>
																						<option value="2">
																							-- Home
																						</option>
																						<option value="14"> 
																							---- Auto &amp; Bike
																						</option>
																						<option value="46"> 
																							------ Politics &amp; Affairs
																						</option>
																						<option value="58"> 
																							-------- Invierno
																						</option>
																						<option value="57"> 
																							-------- La primavera y el otoño
																						</option>
																						<option value="56"> 
																							-------- Zapatos Casuales
																						</option>
																						<option value="55"> 
																							-------- Zapatos				
																						</option>
																						<option value="45" selected="selected"> 
																							------ Fiction
																						</option>
																						<option value="54"> 
																							-------- History
																						</option>
																						<option value="53"> 
																							-------- Beauty &amp; Health
																						</option>
																						<option value="52"> 
																							-------- Bandas
																						</option>
																						<option value="51"> 
																							-------- Anillos
																						</option>
																						<option value="44"> 
																							------ Accesorios
																						</option>
																						<option value="50"> 
																							-------- Zapatos
																						</option>
																						<option value="49"> 
																							-------- Lencería
																						</option>
																						<option value="48"> 
																							-------- Bolsos Moda
																						</option>
																						<option value="47"> 
																							-------- Relojes de moda
																						</option>
																						<option value="13"> 
																							---- Apparel
																						</option>
																						<option value="39"> 
																							------ Bolsas		
																						</option>
																						<option value="38"> 
																							------ Zapatos
																						</option>
																						<option value="37"> 
																							------ Ropa
																						</option>
																						<option value="12"> 
																							---- Electronics
																						</option>
																						<option value="20"> 
																							------ Ropa
																						</option>
																						<option value="36"> 
																							-------- Chaquetas
																						</option>
																						<option value="35"> 
																							-------- Imperméables
																						</option>
																						<option value="34"> 
																							-------- Blazers
																						</option>
																						<option value="33"> 
																							-------- Abrigos Y Chaquetas
																						</option>
																						<option value="18"> 
																							------ Bolsos
																						</option>
																						<option value="32"> 
																							-------- Cuerpo cruz
																						</option>
																						<option value="31"> 
																							-------- Carteras
																						</option>
																						<option value="30"> 
																							-------- Embragues
																						</option>
																						<option value="29"> 
																							-------- Toter
																						</option>
																						<option value="17"> 
																							------ Cima
																						</option>
																						<option value="16"> 
																							------ Vestidos
																						</option>
																						<option value="28"> 
																							-------- Bras
																						</option>
																						<option value="27"> 
																							-------- Estilo de vida
																						</option>
																						<option value="26"> 
																							-------- Mystery
																						</option>
																						<option value="25"> 
																							-------- Vestidos
																						</option>
																						<option value="15"> 
																							------ Home &amp; Garden
																						</option>
																						<option value="40"> 
																							-------- Technology
																						</option>
																						<option value="19"> 
																							-------- Zapatos
																						</option>
																						<option value="24"> 
																							-------- Health &amp; fitness
																						</option>
																						<option value="23"> 
																							-------- Tarde
																						</option>
																						<option value="22"> 
																							-------- Día
																						</option>
																						<option value="21"> 
																							-------- Cóctel
																						</option> 
																					</select>
																				</div> 
																				<input type="hidden" name="orderby" value="position"/> 
																				<input type="hidden" name="orderway" value="desc"/> 
																				<input className="search_query form-control ac_input" type="text" id="search_query_top" name="search_query" value="Enter search your key" autocomplete="off"/> 
																				<button type="submit" name="submit_search" className="btn button-search"> 
																					<span className="icon-search"></span> 
																				</button>
																			</form>
																		</div>
																	</div>  
																	<div className="shopping_cart_menu">
																		<div id="cart_block_top" className="shopping_cart"> 
																			<a href="https://demo.fieldthemes.com/bookshop/home1/es/quick-order" title="Ver mi carrito de compra" rel="nofollow">
																				<span className="ajax_cart_quantity unvisible">0</span> 
																				<span className="ajax_cart_product_txt unvisible">Item - </span> 
																				<span className="ajax_cart_product_txt_s unvisible">Items - </span> 
																				<span className="ajax_cart_total unvisible"> </span> 
																				<span className="ajax_cart_no_product">My cart: 0 item(s)</span> 
																			</a>
																			<div className="cart_block block exclusive">
																				<div className="block_content">
																					<div className="cart_block_list">
																						<p className="cart_block_no_products"> 
																							Ningún producto</p>
																							<div className="cart-prices">
																								<div className="cart-prices-line first-line"> 
																									<span className="price cart_block_shipping_cost ajax_cart_shipping_cost unvisible"> A determinar </span> 
																									<span className="unvisible"> Transporte </span>
																								</div>
																								<div className="cart-prices-line last-line"> 
																									<span className="price cart_block_total ajax_block_cart_total">0,00 €</span> 
																									<span>Total</span>
																								</div>
																							</div>
																							<p className="cart-buttons"> 
																								<a id="button_order_cart" className="btn btn-default button button-small" href="https://demo.fieldthemes.com/bookshop/home1/es/quick-order" title="Confirmar" rel="nofollow">
																									 <span> Confirmar<i className="icon-chevron-right right"></i> </span> 
																								</a>
																							</p>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																		<div id="layer_cart">
																			<div className="clearfix">
																				<div className="layer_cart_product col-xs-12 col-md-6"> 
																					<span className="cross" title="Cerrar Ventana">
																					</span> 
																					<span className="title"> 
																						<span>
																							<i className="icon-check"></i>Producto añadido correctamente a su carrito de la compra
																						</span> 
																					</span>
																					<div className="product-image-container layer_cart_img"></div>
																					<div className="layer_cart_product_info"> 
																						<span id="layer_cart_product_title" className="product-name"></span> 
																						<span id="layer_cart_product_attributes"></span>
																						<div> <strong className="dark">Cantidad</strong> 
																							<span id="layer_cart_product_quantity"></span>
																						</div>
																						<div> 
																							<strong className="dark">Total</strong> 
																							<span id="layer_cart_product_price"></span>
																						</div>
																					</div>
																				</div>
																				<div className="layer_cart_cart col-xs-12 col-md-6"> 
																					<span className="title"> 
																						<span className="ajax_cart_product_txt_s unvisible"> 
																							Hay <span className="ajax_cart_quantity">0</span> 
																							artículos en su carrito. 
																						</span> 
																						<span className="ajax_cart_product_txt "> 
																							Hay 1 artículo en su cesta. 
																						</span> 
																					</span>
																					<div className="layer_cart_row"> 
																						<strong className="dark"> Total productos: </strong> 
																						<span className="ajax_block_products_total"> </span>
																					</div>
																					<div className="layer_cart_row"> <strong className="dark unvisible"> Total envío:&nbsp; </strong> 
																						<span className="ajax_cart_shipping_cost unvisible"> 
																							A determinar 
																						</span>
																					</div>
																					<div className="layer_cart_row"> 
																						<strong className="dark"> Total </strong> 
																						<span className="ajax_block_cart_total"> </span>
																					</div>
																					<div className="button-container"> 
																						<span className="continue btn btn-default button exclusive-medium" title="Continuar la compra"> 
																							<span> 
																								<i className="icon-chevron-left left"></i>Continuar la compra 
																							</span> 
																						</span> 
																						<a className="btn btn-default button button-medium" href="https://demo.fieldthemes.com/bookshop/home1/es/quick-order" title="Ir a la caja" rel="nofollow"> 
																							<span> Ir a la caja<i className="icon-chevron-right right"></i> </span> 
																						</a>
																					</div>
																				</div>
																			</div>
																			<div className="crossseling"></div>
																		</div>
																		<div className="layer_cart_overlay"></div>
																	</div>
                                </div>
                              </div>
                            </div> 
													</header>
												</div>

    </div>
  );
}

export default Header;