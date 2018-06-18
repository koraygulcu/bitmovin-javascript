import {getConfiguration} from '../../utils';
import webhooks from '../../../bitmovin/notifications/webhooks';
import {mockHttp, testSetup} from '../../assertions';

const testConfiguration = getConfiguration();
const notificationWebhooks = webhooks(testConfiguration, mockHttp);

const testWebhookNotification = {
  url: '',
  id: '',
  schema: ''
};

const testNotificationId = 'testNotificationId';
const testEncodingId = 'testEncodingId';

describe('encodings', () => {
  beforeEach(() => {
    testSetup();
  });

  describe('finished', () => {
    describe('list', () => {
      it('should call the correct url', async () => {
        await notificationWebhooks.encoding.encodings.finished.list();
        expect(mockHttp.get).toHaveBeenCalledWith(
          testConfiguration,
          'https://api.bitmovin.com/v1/notifications/webhooks/encoding/encodings/finished'
        );
      });

      it('should include limit', async () => {
        await notificationWebhooks.encoding.encodings.finished.list(10);
        expect(mockHttp.get).toHaveBeenCalledWith(
          testConfiguration,
          'https://api.bitmovin.com/v1/notifications/webhooks/encoding/encodings/finished?limit=10'
        );
      });

      it('should include offset', async () => {
        await notificationWebhooks.encoding.encodings.finished.list(undefined, 10);
        expect(mockHttp.get).toHaveBeenCalledWith(
          testConfiguration,
          'https://api.bitmovin.com/v1/notifications/webhooks/encoding/encodings/finished?offset=10'
        );
      });
    });

    describe('create', () => {
      it('should call the correct url', async () => {
        await notificationWebhooks.encoding.encodings.finished.create(testWebhookNotification);
        expect(mockHttp.post).toHaveBeenCalledWith(
          testConfiguration,
          'https://api.bitmovin.com/v1/notifications/webhooks/encoding/encodings/finished',
          testWebhookNotification
        );
      });
    });

    describe('details', () => {
      it('should call the correct url', async () => {
        await notificationWebhooks.encoding.encodings.finished(testNotificationId).details();
        expect(mockHttp.get).toHaveBeenCalledWith(
          testConfiguration,
          `https://api.bitmovin.com/v1/notifications/webhooks/encoding/encodings/finished/${testNotificationId}`
        );
      });
    });

    describe('delete', () => {
      it('should call the correct url', async () => {
        await notificationWebhooks.encoding.encodings.finished(testNotificationId).delete();
        expect(mockHttp.delete_).toHaveBeenCalledWith(
          testConfiguration,
          `https://api.bitmovin.com/v1/notifications/webhooks/encoding/encodings/finished/${testNotificationId}`
        );
      });
    });

    describe('customData', () => {
      it('should call the correct url', async () => {
        await notificationWebhooks.encoding.encodings
          .finished(testNotificationId)
          .customData();
        expect(mockHttp.put).toHaveBeenCalledWith(
          testConfiguration,
          `https://api.bitmovin.com/v1/notifications/webhooks/encoding/encodings/finished/${testNotificationId}`,
          testWebhookNotification
        );
      });
    });

    describe('single encoding notifications', () => {
      describe('list', () => {
        it('should call the correct url', async () => {
          await notificationWebhooks.encoding.encodings(testEncodingId).finished.list();
          expect(mockHttp.get).toHaveBeenCalledWith(
            testConfiguration,
            `https://api.bitmovin.com/v1/notifications/webhooks/encoding/encodings/${testEncodingId}/finished`
          );
        });

        it('should include limit', async () => {
          await notificationWebhooks.encoding.encodings(testEncodingId).finished.list(10);
          expect(mockHttp.get).toHaveBeenCalledWith(
            testConfiguration,
            `https://api.bitmovin.com/v1/notifications/webhooks/encoding/encodings/${testEncodingId}/finished?limit=10`
          );
        });

        it('should include offset', async () => {
          await notificationWebhooks.encoding.encodings(testEncodingId).finished.list(undefined, 10);
          expect(mockHttp.get).toHaveBeenCalledWith(
            testConfiguration,
            `https://api.bitmovin.com/v1/notifications/webhooks/encoding/encodings/${testEncodingId}/finished?offset=10`
          );
        });
      });

      describe('create', () => {
        it('should call the correct url', async () => {
          await notificationWebhooks.encoding
            .encodings(testEncodingId)
            .finished.create(testWebhookNotification);
          expect(mockHttp.post).toHaveBeenCalledWith(
            testConfiguration,
            `https://api.bitmovin.com/v1/notifications/webhooks/encoding/encodings/${testEncodingId}/finished`,
            testWebhookNotification
          );
        });
      });

      describe('details', () => {
        it('should call the correct url', async () => {
          await notificationWebhooks.encoding
            .encodings(testEncodingId)
            .finished(testNotificationId)
            .details();
          expect(mockHttp.get).toHaveBeenCalledWith(
            testConfiguration,
            `https://api.bitmovin.com/v1/notifications/webhooks/encoding/encodings/${testEncodingId}/finished/${testNotificationId}`
          );
        });
      });

      describe('delete', () => {
        it('should call the correct url', async () => {
          await notificationWebhooks.encoding
            .encodings(testEncodingId)
            .finished(testNotificationId)
            .delete();
          expect(mockHttp.delete_).toHaveBeenCalledWith(
            testConfiguration,
            `https://api.bitmovin.com/v1/notifications/webhooks/encoding/encodings/${testEncodingId}/finished/${testNotificationId}`
          );
        });
      });

      describe('customData', () => {
        it('should call the correct url', async () => {
          await notificationWebhooks.encoding
            .encodings(testEncodingId)
            .finished(testNotificationId)
            .customData();
          expect(mockHttp.put).toHaveBeenCalledWith(
            testConfiguration,
            `https://api.bitmovin.com/v1/notifications/webhooks/encoding/encodings/${testEncodingId}/finished/${testNotificationId}`,
            testWebhookNotification
          );
        });
      });
    });
  });
});
