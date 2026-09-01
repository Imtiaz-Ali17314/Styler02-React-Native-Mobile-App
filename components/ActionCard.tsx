import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteUrl: string) {
    Linking.openURL(websiteUrl);
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>Web Design Trends 2026</Text>
        </View>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1738676524296-364cf18900a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDM0MTR8MHwxfHNlYXJjaHw0fHxhZXN0aGV0aWMlMjB3b3Jrc3BhY2V8ZW58MHx8fHwxNzg4MjUyMzg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text style={styles.cardText} numberOfLines={3}>
            Clean layouts with lots of white space and huge, bold fonts are
            dominating web design in 2026. This approach makes content easy to
            read and gives websites a modern, premium look. Dark backgrounds
            with rich colors and frosted glass effects (glassmorphism) are very
            popular right now. These elements make websites look sleek and
            futuristic while keeping them user-friendly. Small hover animations
            and AI-powered chatbots make websites feel alive and helpful.
            Speed,simplicity, and mobile-first design remain the top priorities
            for every website.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://imtiaz-ali17314.github.io/Lumina-Developers-Smart-Image-Workspace-and-Live-Asset-Studio/',
              )
            }
          >
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              openWebsite('https://www.linkedin.com/in/imtiaz-ali-79476a385/')
            }
          >
            <Text style={styles.socialLinks}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 378,
    height: 390,
    borderRadius: 8,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#ee964b',
    elevation: 4,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowColor: '#666',
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  headingContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardImage: {
    height: 220,
  },
  bodyContainer: {
    padding: 10,
  },
  cardText: {
    color: '#fff',
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  socialLinks: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6,
  },
});
