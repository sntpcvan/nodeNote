(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/add-note/add-note-container/add-note-container.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-note/add-note-container/add-note-container.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-writer (textContent)=\"textContent($event)\"  [collectData]='collectTextSubject.asObservable()'></app-writer>\r\n<button class=\"save-button\" (click)='clickSave()'>SAVE</button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/add-note/writer/writer.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-note/writer/writer.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"writerForm\">\r\n    <section>\r\n        <div class=\"toolBar\">\r\n          <button (click)='removeFormat()'>Paste Plain</button>\r\n        </div>\r\n        <div contenteditable class=\"writer\" id=\"textWriterZone\">\r\n\r\n        </div>\r\n    </section>\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout></app-layout>\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/layout.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/layout.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navigationBar\">\r\n    <a routerLink='/addnote' routerLinkActive='active'>Add Note</a>\r\n    <a routerLink='/addnote' routerLinkActive='active'>Search</a>\r\n    <a routerLink='/addnote' routerLinkActive='active'>Account</a>\r\n</nav>\r\n<div class =\"container-placement\">\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/add-note/add-note-container/add-note-business.ts":
/*!******************************************************************!*\
  !*** ./src/app/add-note/add-note-container/add-note-business.ts ***!
  \******************************************************************/
/*! exports provided: NotesBusiness */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesBusiness", function() { return NotesBusiness; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotesBusiness = /** @class */ (function () {
    /**
     *
     */
    function NotesBusiness() {
    }
    NotesBusiness.prototype.mapToStore = function (uiObj) {
        var data = {
            mainContent: uiObj,
        };
        return data;
    };
    NotesBusiness = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], NotesBusiness);
    return NotesBusiness;
}());



/***/ }),

/***/ "./src/app/add-note/add-note-container/add-note-container.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/add-note/add-note-container/add-note-container.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".save-button{\r\n    width: 17%;\r\n    height: 40px;\r\n    margin: 27px 0 0 0;\r\n    text-align: center;\r\n    font-size: medium;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLW5vdGUvYWRkLW5vdGUtY29udGFpbmVyL2FkZC1ub3RlLWNvbnRhaW5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2FkZC1ub3RlL2FkZC1ub3RlLWNvbnRhaW5lci9hZGQtbm90ZS1jb250YWluZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zYXZlLWJ1dHRvbntcclxuICAgIHdpZHRoOiAxNyU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW46IDI3cHggMCAwIDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/add-note/add-note-container/add-note-container.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/add-note/add-note-container/add-note-container.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AddNoteContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNoteContainerComponent", function() { return AddNoteContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_store_notes_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/notes.store */ "./src/app/store/notes.store.ts");
/* harmony import */ var _add_note_business__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-note-business */ "./src/app/add-note/add-note-container/add-note-business.ts");





var AddNoteContainerComponent = /** @class */ (function () {
    function AddNoteContainerComponent(notesStore, business) {
        this.notesStore = notesStore;
        this.business = business;
        this.collectTextSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    AddNoteContainerComponent.prototype.ngOnInit = function () {
    };
    AddNoteContainerComponent.prototype.textContent = function (text) {
        if (text.length == 1 && text[0].data == "")
            return;
        var data = this.business.mapToStore(text);
        this.notesStore.saveNote(data);
    };
    AddNoteContainerComponent.prototype.clickSave = function () {
        this.collectTextSubject.next();
    };
    AddNoteContainerComponent.ctorParameters = function () { return [
        { type: src_app_store_notes_store__WEBPACK_IMPORTED_MODULE_3__["NotesStore"] },
        { type: _add_note_business__WEBPACK_IMPORTED_MODULE_4__["NotesBusiness"] }
    ]; };
    AddNoteContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-note-container',
            template: __webpack_require__(/*! raw-loader!./add-note-container.component.html */ "./node_modules/raw-loader/index.js!./src/app/add-note/add-note-container/add-note-container.component.html"),
            styles: [__webpack_require__(/*! ./add-note-container.component.css */ "./src/app/add-note/add-note-container/add-note-container.component.css")]
        })
    ], AddNoteContainerComponent);
    return AddNoteContainerComponent;
}());



/***/ }),

/***/ "./src/app/add-note/add-note.module.ts":
/*!*********************************************!*\
  !*** ./src/app/add-note/add-note.module.ts ***!
  \*********************************************/
/*! exports provided: AddNoteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNoteModule", function() { return AddNoteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_note_container_add_note_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-note-container/add-note-container.component */ "./src/app/add-note/add-note-container/add-note-container.component.ts");
/* harmony import */ var _writer_writer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./writer/writer.component */ "./src/app/add-note/writer/writer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/core/core.module */ "./src/core/core.module.ts");
/* harmony import */ var _store_notes_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/notes.store */ "./src/app/store/notes.store.ts");
/* harmony import */ var _add_note_container_add_note_business__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-note-container/add-note-business */ "./src/app/add-note/add-note-container/add-note-business.ts");









var AddNoteModule = /** @class */ (function () {
    function AddNoteModule() {
    }
    AddNoteModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_add_note_container_add_note_container_component__WEBPACK_IMPORTED_MODULE_3__["AddNoteContainerComponent"], _writer_writer_component__WEBPACK_IMPORTED_MODULE_4__["WriterComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], src_core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"]
            ],
            providers: [_store_notes_store__WEBPACK_IMPORTED_MODULE_7__["NotesStore"], _add_note_container_add_note_business__WEBPACK_IMPORTED_MODULE_8__["NotesBusiness"]]
        })
    ], AddNoteModule);
    return AddNoteModule;
}());



/***/ }),

/***/ "./src/app/add-note/writer/writer.component.css":
/*!******************************************************!*\
  !*** ./src/app/add-note/writer/writer.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".writer {\r\n    border-style: solid;\r\n    border-color: black;\r\n    border-width: 1px;\r\n    height: 50vh;\r\n    width: 50%;\r\n}\r\n\r\n.toolBar{\r\n    border-style: solid;\r\n    border-color: black;\r\n    border-width: 1px 1px 0px 1px;\r\n    width: 50%;\r\n    height: 5vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLW5vdGUvd3JpdGVyL3dyaXRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLFVBQVU7SUFDVixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hZGQtbm90ZS93cml0ZXIvd3JpdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JpdGVyIHtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4udG9vbEJhcntcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHggMXB4IDBweCAxcHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiA1dmg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/add-note/writer/writer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/add-note/writer/writer.component.ts ***!
  \*****************************************************/
/*! exports provided: WriterComponent, TextAttribute, TextContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriterComponent", function() { return WriterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAttribute", function() { return TextAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextContent", function() { return TextContent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var WriterComponent = /** @class */ (function () {
    function WriterComponent() {
        this.textContent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    WriterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.writerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            textZone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.writerForm.controls['textZone'].setValue('24323');
        this.collectData.subscribe(function (c) { _this.getTextFromWriter(); });
    };
    WriterComponent.prototype.removeFormat = function () {
        var element = document.getElementById('textWriterZone');
        var innetText = element.innerText;
        element.innerHTML = innetText;
    };
    WriterComponent.prototype.getTextFromWriter = function () {
        var element = document.getElementById('textWriterZone');
        var parsed = this.parseNextLine(element.innerText);
        element.innerHTML = "";
        this.textContent.emit(parsed);
    };
    WriterComponent.prototype.parseNextLine = function (raw) {
        var parsed = raw.split('\n').map(function (o) {
            return {
                attribute: TextAttribute.NextLine,
                data: o
            };
        });
        return parsed;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], WriterComponent.prototype, "collectData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], WriterComponent.prototype, "textContent", void 0);
    WriterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-writer',
            template: __webpack_require__(/*! raw-loader!./writer.component.html */ "./node_modules/raw-loader/index.js!./src/app/add-note/writer/writer.component.html"),
            styles: [__webpack_require__(/*! ./writer.component.css */ "./src/app/add-note/writer/writer.component.css")]
        })
    ], WriterComponent);
    return WriterComponent;
}());

var TextAttribute;
(function (TextAttribute) {
    TextAttribute["NextLine"] = "\n";
    TextAttribute["Bole"] = "<b>";
})(TextAttribute || (TextAttribute = {}));
var TextContent = /** @class */ (function () {
    function TextContent() {
    }
    return TextContent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_note_add_note_container_add_note_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-note/add-note-container/add-note-container.component */ "./src/app/add-note/add-note-container/add-note-container.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var routes = [
    { path: 'addnote', component: _add_note_add_note_container_add_note_container_component__WEBPACK_IMPORTED_MODULE_3__["AddNoteContainerComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'RemainderBot';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _add_note_add_note_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-note/add-note.module */ "./src/app/add-note/add-note.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _add_note_add_note_module__WEBPACK_IMPORTED_MODULE_6__["AddNoteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contants/http.uri.constant.ts":
/*!***********************************************!*\
  !*** ./src/app/contants/http.uri.constant.ts ***!
  \***********************************************/
/*! exports provided: URI, ServiceHost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URI", function() { return URI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceHost", function() { return ServiceHost; });
var URI;
(function (URI) {
    URI["SaveNote"] = "Notes";
    URI["GetNote"] = "";
})(URI || (URI = {}));
var ServiceHost;
(function (ServiceHost) {
    ServiceHost["host"] = "http://localhost:8080/api/";
})(ServiceHost || (ServiceHost = {}));


/***/ }),

/***/ "./src/app/layout/layout.component.css":
/*!*********************************************!*\
  !*** ./src/app/layout/layout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigationBar a {\r\n    margin-right: 30px;\r\n}\r\n\r\n\r\n\r\n.container-placement{\r\n    margin-top: 32px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOzs7O0FBSUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2aWdhdGlvbkJhciBhIHtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG5cclxuXHJcblxyXG4uY29udGFpbmVyLXBsYWNlbWVudHtcclxuICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/layout/layout.component.css")]
        })
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/store/notes.store.ts":
/*!**************************************!*\
  !*** ./src/app/store/notes.store.ts ***!
  \**************************************/
/*! exports provided: NotesStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesStore", function() { return NotesStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_core_communication_core_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/core/communication/core.http */ "./src/core/communication/core.http.ts");
/* harmony import */ var _contants_http_uri_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contants/http.uri.constant */ "./src/app/contants/http.uri.constant.ts");




var NotesStore = /** @class */ (function () {
    /**
     *
     */
    function NotesStore(http) {
        this.http = http;
    }
    NotesStore.prototype.getNote = function () {
        return this.http.get("");
    };
    NotesStore.prototype.saveNote = function (note) {
        this.http.post(_contants_http_uri_constant__WEBPACK_IMPORTED_MODULE_3__["URI"].SaveNote, note).subscribe(function (s) { return console.log(s); });
        return;
    };
    NotesStore.ctorParameters = function () { return [
        { type: src_core_communication_core_http__WEBPACK_IMPORTED_MODULE_2__["HttpCommunication"] }
    ]; };
    NotesStore = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], NotesStore);
    return NotesStore;
}());



/***/ }),

/***/ "./src/core/communication/core.http.ts":
/*!*********************************************!*\
  !*** ./src/core/communication/core.http.ts ***!
  \*********************************************/
/*! exports provided: HttpCommunication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpCommunication", function() { return HttpCommunication; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_contants_http_uri_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/contants/http.uri.constant */ "./src/app/contants/http.uri.constant.ts");




var HttpCommunication = /** @class */ (function () {
    function HttpCommunication(http) {
        this.http = http;
    }
    HttpCommunication.prototype.get = function (url) {
        return this.http.get(url);
    };
    HttpCommunication.prototype.post = function (url, body) {
        url = src_app_contants_http_uri_constant__WEBPACK_IMPORTED_MODULE_3__["ServiceHost"].host + url;
        return this.http.post(url, body);
        //  this.http.get<T>("https://localhost:44300/api/values").subscribe(s=> console.log(s));
        //  return undefined;
    };
    HttpCommunication.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    HttpCommunication = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], HttpCommunication);
    return HttpCommunication;
}());



/***/ }),

/***/ "./src/core/core.module.ts":
/*!*********************************!*\
  !*** ./src/core/core.module.ts ***!
  \*********************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _communication_core_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./communication/core.http */ "./src/core/communication/core.http.ts");




var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [_communication_core_http__WEBPACK_IMPORTED_MODULE_3__["HttpCommunication"]],
            bootstrap: []
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\gitub\Lockdown\UI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map