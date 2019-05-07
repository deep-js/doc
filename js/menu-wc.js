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
                    <a href="index.html" data-type="index-link">deepjs documentation</a>
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
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-c00fffc008f1e4b76a83b4e2711e3b2e"' : 'data-target="#xs-components-links-module-AppModule-c00fffc008f1e4b76a83b4e2711e3b2e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-c00fffc008f1e4b76a83b4e2711e3b2e"' :
                                            'id="xs-components-links-module-AppModule-c00fffc008f1e4b76a83b4e2711e3b2e"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DemoComponentImpl.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DemoComponentImpl</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EpochVisualizationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EpochVisualizationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ImageInputComponentImpl.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ImageInputComponentImpl</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InputContainerComponentImpl.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InputContainerComponentImpl</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/JSONModelComponentImpl.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">JSONModelComponentImpl</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/JsonInputComponentImpl.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">JsonInputComponentImpl</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LossChartVisualizationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LossChartVisualizationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LossVisualizationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LossVisualizationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModelContainerComponentImpl.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModelContainerComponentImpl</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModifParamModelComponentImpl.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModifParamModelComponentImpl</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TSModelComponentImpl.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TSModelComponentImpl</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TensorspaceVisualizationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TensorspaceVisualizationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TextVisualizationModelComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TextVisualizationModelComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VisualizationContainerComponentImpl.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VisualizationContainerComponentImpl</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VisualizationInferenceImageComponentImpl.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VisualizationInferenceImageComponentImpl</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VisualizationInferenceJSONComponentImpl.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VisualizationInferenceJSONComponentImpl</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VisualizationItemComponentImpl.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VisualizationItemComponentImpl</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-AppModule-c00fffc008f1e4b76a83b4e2711e3b2e"' : 'data-target="#xs-directives-links-module-AppModule-c00fffc008f1e4b76a83b4e2711e3b2e"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AppModule-c00fffc008f1e4b76a83b4e2711e3b2e"' :
                                        'id="xs-directives-links-module-AppModule-c00fffc008f1e4b76a83b4e2711e3b2e"' }>
                                        <li class="link">
                                            <a href="directives/ImageDrawableDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ImageDrawableDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/InjectComponentDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">InjectComponentDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-c00fffc008f1e4b76a83b4e2711e3b2e"' : 'data-target="#xs-injectables-links-module-AppModule-c00fffc008f1e4b76a83b4e2711e3b2e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-c00fffc008f1e4b76a83b4e2711e3b2e"' :
                                        'id="xs-injectables-links-module-AppModule-c00fffc008f1e4b76a83b4e2711e3b2e"' }>
                                        <li class="link">
                                            <a href="injectables/TrainerServiceImpl.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TrainerServiceImpl</a>
                                        </li>
                                    </ul>
                                </li>
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
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/DatasetImageMissingError.html" data-type="entity-link">DatasetImageMissingError</a>
                            </li>
                            <li class="link">
                                <a href="classes/DemoPresenterImpl.html" data-type="entity-link">DemoPresenterImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/EpochVisualizationPresenter.html" data-type="entity-link">EpochVisualizationPresenter</a>
                            </li>
                            <li class="link">
                                <a href="classes/ImageInputPresenterImpl.html" data-type="entity-link">ImageInputPresenterImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/InputContainerPresenterImpl.html" data-type="entity-link">InputContainerPresenterImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/InputDataImpl.html" data-type="entity-link">InputDataImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/JsonInputEmptyError.html" data-type="entity-link">JsonInputEmptyError</a>
                            </li>
                            <li class="link">
                                <a href="classes/JsonInputPresenterImpl.html" data-type="entity-link">JsonInputPresenterImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/JSONModelPresenterImpl.html" data-type="entity-link">JSONModelPresenterImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/LossChartVisualizationPresenter.html" data-type="entity-link">LossChartVisualizationPresenter</a>
                            </li>
                            <li class="link">
                                <a href="classes/LossVisualizationPresenter.html" data-type="entity-link">LossVisualizationPresenter</a>
                            </li>
                            <li class="link">
                                <a href="classes/ModelContainerPresenterImpl.html" data-type="entity-link">ModelContainerPresenterImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/ModelDefBoxEmptyError.html" data-type="entity-link">ModelDefBoxEmptyError</a>
                            </li>
                            <li class="link">
                                <a href="classes/ModifParamModelPresenterImpl.html" data-type="entity-link">ModifParamModelPresenterImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/TensorspaceVisualizationPresenter.html" data-type="entity-link">TensorspaceVisualizationPresenter</a>
                            </li>
                            <li class="link">
                                <a href="classes/TextVisualizationModelPresenter.html" data-type="entity-link">TextVisualizationModelPresenter</a>
                            </li>
                            <li class="link">
                                <a href="classes/TrainData0.html" data-type="entity-link">TrainData0</a>
                            </li>
                            <li class="link">
                                <a href="classes/TrainingImpl.html" data-type="entity-link">TrainingImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/TrainParamEmptyError.html" data-type="entity-link">TrainParamEmptyError</a>
                            </li>
                            <li class="link">
                                <a href="classes/TSModelPresenterImpl.html" data-type="entity-link">TSModelPresenterImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/VisualizationContainerPresenterImpl.html" data-type="entity-link">VisualizationContainerPresenterImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/VisualizationInferenceImagePresenterImpl.html" data-type="entity-link">VisualizationInferenceImagePresenterImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/VisualizationInferenceJSONPresenterImpl.html" data-type="entity-link">VisualizationInferenceJSONPresenterImpl</a>
                            </li>
                            <li class="link">
                                <a href="classes/VisualizationItemPresenterImpl.html" data-type="entity-link">VisualizationItemPresenterImpl</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/DemoComponent.html" data-type="entity-link">DemoComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DemoPresenter.html" data-type="entity-link">DemoPresenter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ImageInputComponent.html" data-type="entity-link">ImageInputComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ImageInputPresenter.html" data-type="entity-link">ImageInputPresenter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InputComponent.html" data-type="entity-link">InputComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InputContainerComponent.html" data-type="entity-link">InputContainerComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InputContainerPresenter.html" data-type="entity-link">InputContainerPresenter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InputData.html" data-type="entity-link">InputData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InputPresenter.html" data-type="entity-link">InputPresenter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/JsonInputComponent.html" data-type="entity-link">JsonInputComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/JsonInputPresenter.html" data-type="entity-link">JsonInputPresenter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/JSONModelComponent.html" data-type="entity-link">JSONModelComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/JSONModelPresenter.html" data-type="entity-link">JSONModelPresenter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ModelComponent.html" data-type="entity-link">ModelComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ModelContainerComponent.html" data-type="entity-link">ModelContainerComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ModelContainerPresenter.html" data-type="entity-link">ModelContainerPresenter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ModelPresenter.html" data-type="entity-link">ModelPresenter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ModifParamModelComponent.html" data-type="entity-link">ModifParamModelComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ModifParamModelPresenter.html" data-type="entity-link">ModifParamModelPresenter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TrainData.html" data-type="entity-link">TrainData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Training.html" data-type="entity-link">Training</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TSModelComponent.html" data-type="entity-link">TSModelComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TSModelPresenter.html" data-type="entity-link">TSModelPresenter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VisualizationComponent.html" data-type="entity-link">VisualizationComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VisualizationContainerComponent.html" data-type="entity-link">VisualizationContainerComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VisualizationContainerPresenter.html" data-type="entity-link">VisualizationContainerPresenter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VisualizationInferenceComponent.html" data-type="entity-link">VisualizationInferenceComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VisualizationInferenceImageComponent.html" data-type="entity-link">VisualizationInferenceImageComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VisualizationInferenceImagePresenter.html" data-type="entity-link">VisualizationInferenceImagePresenter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VisualizationInferenceJSONComponent.html" data-type="entity-link">VisualizationInferenceJSONComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VisualizationInferenceJSONPresenter.html" data-type="entity-link">VisualizationInferenceJSONPresenter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VisualizationInferencePresenter.html" data-type="entity-link">VisualizationInferencePresenter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VisualizationItemComponent.html" data-type="entity-link">VisualizationItemComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VisualizationItemPresenter.html" data-type="entity-link">VisualizationItemPresenter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VisualizationModelComponent.html" data-type="entity-link">VisualizationModelComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VisualizationModelPresenter.html" data-type="entity-link">VisualizationModelPresenter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VisualizationPresenter.html" data-type="entity-link">VisualizationPresenter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VisualizationTrainingComponent.html" data-type="entity-link">VisualizationTrainingComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VisualizationTrainingPresenter.html" data-type="entity-link">VisualizationTrainingPresenter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Window.html" data-type="entity-link">Window</a>
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
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
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