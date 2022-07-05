angular.module('phoneList').component('phoneList',{
    // template:
    // '<ul>' +
    //     '<li ng-repeat="phone in $ctrl.phones">' +
    //         '<span>{{phone.name}}</span>' +
    //         '<p>{{phone.snippet}}</p>' +
    //     '</li>' +
    // '</ul>',
    templateUrl: 'phone-list/phone-list.template.html',
    // controller: function PhoneListController(){
    //     this.phones = [
    //         {
    //             name: 'Nexus S',
    //             snippet: 'Fast just go faster with Nexus S',
    //             age:1
    //         }, {
    //             name:'Motorola XOOM™ with Wi-Fi',
    //             snippet: 'The Next, Next Generation Tablet',
    //             age:2
    //         },{
    //             name:'Motorola XOOM™',
    //             snippet: 'The Next, Next Generation Tablet',
    //             age:3
    //         }
    //     ];
    //     this.orderProp = 'age';
    // }
    controller: ['Phone',
        function PhoneListController(Phone){
            this.phones = Phone.query();
            this.orderProp = 'age';
        }
]
}); 