module.exports = {
    create(context) {
        return {
            ClassDeclaration(node) {
                let source = context.getSourceCode().getText();
                let subCount = (source.match(/subscribe/g) || []).length;
                let subPushCount = (source.match(/subscriptions\$/g) || []).length;
                let extendsCount = (source.match(/extends WithSubscription/g) || []).length;
                if (subCount !== subPushCount || (subCount > 0 && extendsCount === 0)) {
                    context.report({
                        node: node,
                        message: "subscribe not correctly implemented, a component that needs \
                            a subscription must implement the WithSubscription class and push \
                            the subscription into the subscriptions container. Take a look at \
                            https://gist.github.com/GJGits/c5503741309850d86ff7a159d57d9a9e ."
                    });
                }
            }
        }
    }
}