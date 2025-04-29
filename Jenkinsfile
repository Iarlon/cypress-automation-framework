pipeline {
    agent any

    tools {
        nodejs "node"
    }

    stages {
        stage('Cypress parallel test suite'){
            parallel {
                stage('Cypress test suite 1') {
                    agent {
                        label "remote_node1"
                    }
                    steps {
                        git url: 'https://github.com/Iarlon/cypress-automation-framework.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run triggerAllTests-automation-test-store-dashboard'
                    }
                }
                stage('Cypress test suite 2') {
                    agent {
                        label "remote_node2"
                    }
                    steps {
                        git url: 'https://github.com/Iarlon/cypress-automation-framework.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run triggerAllTests-automation-test-store-dashboard'
                    }
                }
                
            }
        }
    }
}