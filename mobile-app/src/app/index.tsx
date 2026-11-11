import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BottomTabInset } from '@/constants/theme';

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={styles.screen}
      edges={['top', 'left', 'right']}
    >
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>NS</Text>
        </View>

        <Text style={styles.title}>NutriScan AI</Text>

        <Text style={styles.subtitle}>
          Жеке тамақтану көмекшісі
        </Text>

        <Text style={styles.description}>
          Тамақтануыңызды бақылап, өнімдерді жеке мақсатыңыз бен
          тағамдық шектеулеріңізге сәйкес таңдаңыз.
        </Text>

        <Text style={styles.sectionTitle}>
          Қосымша мүмкіндіктері
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Өнімді тексеру</Text>
          <Text style={styles.cardText}>
            Өнімнің құрамын, тағамдық құндылығын және
            аллергендерін қарау.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Тамақтану күнделігі</Text>
          <Text style={styles.cardText}>
            Күнделікті тағамдар мен ішілген су мөлшерін тіркеу.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Жеке ұсыныстар</Text>
          <Text style={styles.cardText}>
            Тамақтану мақсатыңызға сәйкес AI-талдау алу.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F4F7F2',
  },
  content: {
    width: '100%',
    maxWidth: 600,
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: BottomTabInset + 24,
  },
  logo: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: '#246B4A',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
  },
  title: {
    color: '#183C2C',
    fontSize: 34,
    fontWeight: '700',
  },
  subtitle: {
    color: '#246B4A',
    fontSize: 18,
    marginTop: 8,
  },
  description: {
    color: '#52645A',
    fontSize: 16,
    lineHeight: 25,
    marginTop: 18,
  },
  sectionTitle: {
    color: '#183C2C',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 32,
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 20,
    marginBottom: 12,
  },
  cardTitle: {
    color: '#183C2C',
    fontSize: 18,
    fontWeight: '600',
  },
  cardText: {
    color: '#52645A',
    fontSize: 15,
    lineHeight: 23,
    marginTop: 8,
  },
});