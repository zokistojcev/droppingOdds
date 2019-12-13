'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">marathon documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-cc4a84add4bcc36a747e3d027495e3c8"' : 'data-target="#xs-components-links-module-AppModule-cc4a84add4bcc36a747e3d027495e3c8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-cc4a84add4bcc36a747e3d027495e3c8"' :
                                            'id="xs-components-links-module-AppModule-cc4a84add4bcc36a747e3d027495e3c8"' }>
                                            <li class="link">
                                                <a href="components/AllOddsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AllOddsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DroppingRowComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DroppingRowComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LeftColumnComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LeftColumnComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgbdDropdownBasicComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgbdDropdownBasicComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OddNavbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OddNavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShowAllOddsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ShowAllOddsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SportsNavbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SportsNavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TooltipContentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TooltipContentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TournamentPairsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TournamentPairsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TournamentsListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TournamentsListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-AppModule-cc4a84add4bcc36a747e3d027495e3c8"' : 'data-target="#xs-directives-links-module-AppModule-cc4a84add4bcc36a747e3d027495e3c8"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AppModule-cc4a84add4bcc36a747e3d027495e3c8"' :
                                        'id="xs-directives-links-module-AppModule-cc4a84add4bcc36a747e3d027495e3c8"' }>
                                        <li class="link">
                                            <a href="directives/AllOddsDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AllOddsDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/TooltipDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">TooltipDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-cc4a84add4bcc36a747e3d027495e3c8"' : 'data-target="#xs-injectables-links-module-AppModule-cc4a84add4bcc36a747e3d027495e3c8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-cc4a84add4bcc36a747e3d027495e3c8"' :
                                        'id="xs-injectables-links-module-AppModule-cc4a84add4bcc36a747e3d027495e3c8"' }>
                                        <li class="link">
                                            <a href="injectables/OddsApiService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>OddsApiService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/BiggestAverage.html" data-type="entity-link">BiggestAverage</a>
                            </li>
                            <li class="link">
                                <a href="classes/CoefficientsFootball.html" data-type="entity-link">CoefficientsFootball</a>
                            </li>
                            <li class="link">
                                <a href="classes/CoefficientsSportlife.html" data-type="entity-link">CoefficientsSportlife</a>
                            </li>
                            <li class="link">
                                <a href="classes/CoefficientsTennis.html" data-type="entity-link">CoefficientsTennis</a>
                            </li>
                            <li class="link">
                                <a href="classes/DroppingOdd.html" data-type="entity-link">DroppingOdd</a>
                            </li>
                            <li class="link">
                                <a href="classes/MinutesOfBeginningTimeAndLastChange.html" data-type="entity-link">MinutesOfBeginningTimeAndLastChange</a>
                            </li>
                            <li class="link">
                                <a href="classes/Odd.html" data-type="entity-link">Odd</a>
                            </li>
                            <li class="link">
                                <a href="classes/Sport.html" data-type="entity-link">Sport</a>
                            </li>
                            <li class="link">
                                <a href="classes/SportsNAvbar.html" data-type="entity-link">SportsNAvbar</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/OddsApiService.html" data-type="entity-link">OddsApiService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});