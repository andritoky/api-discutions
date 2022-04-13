"use strict";
// Create the collection of api keys
const apiKeys = new Map();
apiKeys.set('123456789', {
    id: 1,
    name: 'app1',
    secret: 'secret1'
});
apiKeys.set('987654321', {
    id: 2,
    name: 'app2',
    secret: 'secret2'
});
// Your function to get the secret associated to the key id
function getSecret(keyId, done) {
    if (!apiKeys.has(keyId)) {
        return done(new Error('Unknown api key'));
    }
    const clientApp = apiKeys.get(keyId);
    done(null, clientApp.secret, {
        id: clientApp.id,
        name: clientApp.name
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmtleS5wcm90ZWN0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBpL21pZGRsZXdhcmVzL2FwaS5rZXkucHJvdGVjdGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxvQ0FBb0M7QUFDcEMsTUFBTSxPQUFPLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRTtJQUN2QixFQUFFLEVBQUUsQ0FBQztJQUNMLElBQUksRUFBRSxNQUFNO0lBQ1osTUFBTSxFQUFFLFNBQVM7Q0FDbEIsQ0FBQyxDQUFDO0FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUU7SUFDdkIsRUFBRSxFQUFFLENBQUM7SUFDTCxJQUFJLEVBQUUsTUFBTTtJQUNaLE1BQU0sRUFBRSxTQUFTO0NBQ2xCLENBQUMsQ0FBQztBQUVILDJEQUEyRDtBQUMzRCxTQUFTLFNBQVMsQ0FBQyxLQUFVLEVBQUUsSUFBUztJQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN2QixPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7S0FDM0M7SUFDRCxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLElBQUksQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sRUFBRTtRQUMzQixFQUFFLEVBQUUsU0FBUyxDQUFDLEVBQUU7UUFDaEIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO0tBQ3JCLENBQUMsQ0FBQztBQUNMLENBQUMifQ==