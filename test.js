angular.module('angularTest', [])
    .controller('AngularTestController', function() {
        var vm = this;

        vm.inputs = [
            'q_1',
            'q_2'
        ]

        vm.radios = [
            'r_1',
            'r_2',
            'r_3'
        ]

        vm.blocks = [
            {
                description: 'block 1',
                id: '1',
                questions: [
                    {
                        description: 'question 1',
                        id: '1',
                        answers: [
                            {
                                description: 'answer 1',
                                id: '1',
                                value: 'b1_q1_a1'
                            },
                            {
                                description: 'answer 2',
                                id: '2',
                                value: 'b1_q1_a2'
                            }
                        ]
                    },
                    {
                        description: 'question 2',
                        id: '2',
                        answers: [
                            {
                                description: 'answer 1',
                                id: '1',
                                value: 'b1_q2_a1'
                            },
                            {
                                description: 'answer 2',
                                id: '2',
                                value: 'b1_q2_a2'
                            }
                        ]
                    }
                ]
            },
            {
                description: 'block 2',
                id: '2',
                questions: [
                    {
                        description: 'question 1',
                        id: '1',
                        answers: [
                            {
                                description: 'answer 1',
                                id: '1',
                                value: 'b2_q1_a1'
                            },
                            {
                                description: 'answer 2',
                                id: '2',
                                value: 'b2_q1_a2'
                            }
                        ]
                    },
                    {
                        description: 'question 2',
                        id: '2',
                        answers: [
                            {
                                description: 'answer 1',
                                id: '1',
                                value: 'b2_q2_a1'
                            },
                            {
                                description: 'answer 2',
                                id: '2',
                                value: 'b2_q2_a2'
                            }
                        ]
                    }
                ]
            }
        ]

        vm.submit = function(formModel) {
            // you can see the form model into vm
            // also you can see all the input values into formModel.data
            console.log(vm, formModel);
        }

        vm.submitDynamic = function(formModel) {
            console.log(vm,formModel);
        }

        vm.submitComplexDinamic = function(formModel) {
            console.log(formModel);
        }
    
        vm.submitNestedForm = function(currentFormIndex, isLastBlock) {
            if (isLastBlock) {
                console.log(vm.complexDynamicFormByBlocks.data);
            } else {
                vm.complexDynamicFormByBlocks.showSubform = 'subform_' + (currentFormIndex + 1);
            }
        }
    })
