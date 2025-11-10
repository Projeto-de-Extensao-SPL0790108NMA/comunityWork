import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  keyboardAvoidingContainer: {
    flex: 1,
  },
  messageList: {
    flex: 1,
    paddingHorizontal: 16,
  },

  // Message Bubbles
  bubbleContainer: {
    maxWidth: '80%',
    marginBottom: 12,
  },
  myBubbleContainer: {
    alignSelf: 'flex-end',
  },
  recipientBubbleContainer: {
    alignSelf: 'flex-start',
  },
  messageBubble: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  recipientBubble: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 4,
  },
  myBubble: {
    backgroundColor: '#3B82F6',
    borderBottomRightRadius: 4,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 22,
  },
  myMessageText: {
    color: '#FFFFFF',
  },
  recipientMessageText: {
    color: '#0F172A',
  },

  // Timestamps
  timestamp: {
    fontSize: 11,
    color: '#94A3B8',
    marginTop: 4,
    fontWeight: '500',
  },
  myTimestamp: {
    alignSelf: 'flex-end',
  },
  recipientTimestamp: {
    alignSelf: 'flex-start',
  },

  // Date Separator
  dateSeparator: {
    alignSelf: 'center',
    backgroundColor: '#E2E8F0',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginVertical: 16,
  },
  dateSeparatorText: {
    color: '#64748B',
    fontWeight: '600',
    fontSize: 12,
  },

  // Empty State
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0F172A',
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 15,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 22,
  },

  // Input Container
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
    gap: 12,
  },
  input: {
    flex: 1,
    minHeight: 44,
    maxHeight: 100,
    backgroundColor: '#F8FAFC',
    borderRadius: 22,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 12,
    fontSize: 16,
    color: '#0F172A',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  sendButton: {
    backgroundColor: '#3B82F6',
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#3B82F6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  sendButtonDisabled: {
    backgroundColor: '#CBD5E1',
    shadowOpacity: 0,
  },
});
