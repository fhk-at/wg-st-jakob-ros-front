import {useEffect, useState} from 'react'

//import {CMSRichTextField, CMSTextField} from 'jaen-cms/lib/editable'

import "./index.scss"

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBBtn,
  MDBIcon,
  MDBContainer
} from 'mdb-react-ui-kit';

import {
  ConnectedPageType,
  // CMSProvider,
  PageProvider,
  // TextField,
  RichTextField,
} from '@snek-shipyard/jaen-cms'
import {AdvancedFooter, NavbarHeader} from '@components/organisms'

function useStickyState(defaultValue:any, key:any) {
  const [cookie, setCookie] = useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null
      ? JSON.parse(stickyValue)
      : defaultValue;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(cookie));
  }, [key, cookie]);
  return [cookie, setCookie];
}


const PrivacyPage: ConnectedPageType = ({slug}) => {
  const [cookie] = useStickyState('', 'cookiesettings');
  const privacy = {
    rawValue: "<p></p><p><b>Datenschutz</b></p><p>Wir haben diese Datenschutzerklärung (Fassung 29.07.2020-111384663) verfasst, um Ihnen gemäß der Vorgaben der <a href=\"https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679&amp;tid=111384663\">Datenschutz-Grundverordnung (EU) 2016/679</a> zu erklären, welche Informationen wir sammeln, wie wir Daten verwenden und welche Entscheidungsmöglichkeiten Sie als Besucher dieser Webseite haben.</p><p>Leider liegt es in der Natur der Sache, dass diese Erklärungen sehr technisch klingen, wir haben uns bei der Erstellung jedoch bemüht die wichtigsten Dinge so einfach und klar wie möglich zu beschreiben.</p><p><b>Automatische Datenspeicherung</b></p><p>Wenn Sie heutzutage Webseiten besuchen, werden gewisse Informationen automatisch erstellt und gespeichert, so auch auf dieser Webseite.</p><p>Wenn Sie unsere Webseite so wie jetzt gerade besuchen, speichert unser Webserver (Computer auf dem diese Webseite gespeichert ist) automatisch Daten wie</p><ul><li>die Adresse (URL) der aufgerufenen Webseite</li><li>Browser und Browserversion</li><li>das verwendete Betriebssystem</li><li>die Adresse (URL) der zuvor besuchten Seite (Referrer URL)</li><li>den Hostname und die IP-Adresse des Geräts von welchem aus zugegriffen wird</li><li>Datum und Uhrzeit</li></ul><p>in Dateien (Webserver-Logfiles).</p><p>In der Regel werden Webserver-Logfiles zwei Wochen gespeichert und danach automatisch gelöscht. Wir geben diese Daten nicht weiter, können jedoch nicht ausschließen, dass diese Daten beim Vorliegen von rechtswidrigem Verhalten eingesehen werden.</p><p><b>Cookies</b></p><p>Unsere Website verwendet so genannte Cookies. Dabei handelt es sich um kleine Textdateien, die mit Hilfe des Browsers auf Ihrem Endgerät abgelegt werden. Sie richten keinen Schaden an. Wir nutzen Cookies dazu, unser Angebot nutzerfreundlich zu gestalten. Einige Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Sie ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen. Wenn Sie dies nicht wünschen, so können Sie Ihren Browser so einrichten, dass er Sie über das Setzen von Cookies informiert und Sie dies nur im Einzelfall erlauben. Bei der Deaktivierung von Cookies kann die Funktionalität unserer Website eingeschränkt sein.</p><p><b>Wie kann ich Cookies löschen?</b></p><p>Wie und ob Sie Cookies verwenden wollen, entscheiden Sie selbst. Unabhängig von welchem Service oder welcher Webseite die Cookies stammen, haben Sie immer die Möglichkeit Cookies zu löschen, zu deaktivieren oder nur teilweise zuzulassen. Zum Beispiel können Sie Cookies von Drittanbietern blockieren, aber alle anderen Cookies zulassen.</p><p>Wenn Sie feststellen möchten, welche Cookies in Ihrem Browser gespeichert wurden, wenn Sie Cookie-Einstellungen ändern oder löschen wollen, können Sie dies in Ihren Browser-Einstellungen finden:</p><p><a href=\"https://support.google.com/chrome/answer/95647?tid=111384663\">Chrome: Cookies in Chrome löschen, aktivieren und verwalten</a></p><p><a href=\"https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=111384663\">Safari: Verwalten von Cookies und Websitedaten mit Safari</a></p><p><a href=\"https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=111384663\">Firefox: Cookies löschen, um Daten zu entfernen, die Websites auf Ihrem Computer abgelegt haben</a></p><p><a href=\"https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=111384663\">Internet Explorer: Löschen und Verwalten von Cookies</a></p><p><a href=\"https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=111384663\">Microsoft Edge: Löschen und Verwalten von Cookies</a></p><p>Falls Sie grundsätzlich keine Cookies haben wollen, können Sie Ihren Browser so einrichten, dass er Sie immer informiert, wenn ein Cookie gesetzt werden soll. So können Sie bei jedem einzelnen Cookie entscheiden, ob Sie das Cookie erlauben oder nicht. Die Vorgangsweise ist je nach Browser verschieden. Am besten Sie suchen die Anleitung in Google mit dem Suchbegriff “Cookies löschen Chrome” oder “Cookies deaktivieren Chrome” im Falle eines Chrome Browsers.</p><p><b>Wie sieht es mit meinem Datenschutz aus?</b></p><p>Seit 2009 gibt es die sogenannten „Cookie-Richtlinien“. Darin ist festgehalten, dass das Speichern von Cookies eine Einwilligung von Ihnen verlangt. Innerhalb der EU-Länder gibt es allerdings noch sehr unterschiedliche Reaktionen auf diese Richtlinien. In Österreich erfolgte aber die Umsetzung dieser Richtlinie in § 96 Abs. 3 des Telekommunikationsgesetzes (TKG).</p><p>Wenn Sie mehr über Cookies wissen möchten und technische Dokumentationen nicht scheuen, empfehlen wir <a href=\"https://tools.ietf.org/html/rfc6265\">https://tools.ietf.org/html/rfc6265</a>, dem Request for Comments der Internet Engineering Task Force (IETF) namens “HTTP State Management Mechanism”.</p><p><b>Speicherung persönlicher Daten</b></p><p>Persönliche Daten, die Sie uns auf dieser Website elektronisch übermitteln, wie zum Beispiel Name, E-Mail-Adresse, Adresse oder andere persönlichen Angaben im Rahmen der Übermittlung eines Formulars oder Kommentaren im Blog, werden von uns gemeinsam mit dem Zeitpunkt und der IP-Adresse nur zum jeweils angegebenen Zweck verwendet, sicher verwahrt und nicht an Dritte weitergegeben.</p><p>Wir nutzen Ihre persönlichen Daten somit nur für die Kommunikation mit jenen Besuchern, die Kontakt ausdrücklich wünschen und für die Abwicklung der auf dieser Webseite angebotenen Dienstleistungen und Produkte. Wir geben Ihre persönlichen Daten ohne Zustimmung nicht weiter, können jedoch nicht ausschließen, dass diese Daten beim Vorliegen von rechtswidrigem Verhalten eingesehen werden.</p><p>Wenn Sie uns persönliche Daten per E-Mail schicken – somit abseits dieser Webseite – können wir keine sichere Übertragung und den Schutz Ihrer Daten garantieren. Wir empfehlen Ihnen, vertrauliche Daten niemals unverschlüsselt per E-Mail zu übermitteln.</p><p><b>Rechte laut Datenschutzgrundverordnung</b></p><p>Ihnen stehen laut den Bestimmungen der DSGVO und des österreichischen <a href=\"https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&amp;Gesetzesnummer=10001597&amp;tid=111384663\">Datenschutzgesetzes (DSG)</a> grundsätzlich die folgende Rechte zu:</p><ul><li>Recht auf Berichtigung (Artikel 16 DSGVO)</li><li>Recht auf Löschung („Recht auf Vergessenwerden“) (Artikel 17 DSGVO)</li><li>Recht auf Einschränkung der Verarbeitung (Artikel 18 DSGVO)</li><li>Recht auf Benachrichtigung – Mitteilungspflicht im Zusammenhang mit der Berichtigung oder Löschung personenbezogener Daten oder der Einschränkung der Verarbeitung (Artikel 19 DSGVO)</li><li>Recht auf Datenübertragbarkeit (Artikel 20 DSGVO)</li><li>Widerspruchsrecht (Artikel 21 DSGVO)</li><li>Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung — einschließlich Profiling — beruhenden Entscheidung unterworfen zu werden (Artikel 22 DSGVO)</li></ul><p>Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren, welche in Österreich die Datenschutzbehörde ist, deren Webseite Sie unter <a href=\"https://www.dsb.gv.at/?tid=111384663\">https://www.dsb.gv.at/</a> finden.</p><p><b>TLS-Verschlüsselung mit https</b></p><p>Wir verwenden https um Daten abhörsicher im Internet zu übertragen (Datenschutz durch Technikgestaltung <a href=\"https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&amp;from=DE&amp;tid=111384663\">Artikel 25 Absatz 1 DSGVO</a>). Durch den Einsatz von TLS (Transport Layer Security), einem Verschlüsselungsprotokoll zur sicheren Datenübertragung im Internet können wir den Schutz vertraulicher Daten sicherstellen. Sie erkennen die Benutzung dieser Absicherung der Datenübertragung am kleinen Schlosssymbol links oben im Browser und der Verwendung des Schemas https (anstatt http) als Teil unserer Internetadresse.</p><p><b>Google Analytics Datenschutzerklärung</b></p><p>Wir verwenden auf unserer Website das Analyse-Tracking Tool Google Analytics (GA) des amerikanischen Unternehmens Google Inc. Für den europäischen Raum ist das Unternehmen Google Ireland Limited (Gordon House, Barrow Street Dublin 4, Irland) für alle Google-Dienste verantwortlich. Google Analytics sammelt Daten über Ihre Handlungen auf unserer Website. Wenn Sie beispielsweise einen Link anklicken, wird diese Aktion in einem Cookie gespeichert und an Google Analytics versandt. Mithilfe der Berichte, die wir von Google Analytics erhalten, können wir unsere Website und unser Service besser an Ihre Wünsche anpassen. Im Folgenden gehen wir näher auf das Tracking Tool ein und informieren Sie vor allem darüber, welche Daten gespeichert werden und wie Sie das verhindern können.</p><p><b>Was ist Google Analytics?</b></p><p>Google Analytics ist ein Trackingtool, das der Datenverkehrsanalyse unserer Website dient. Damit Google Analytics funktioniert, wird ein Tracking-Code in den Code unserer Website eingebaut. Wenn Sie unsere Website besuchen, zeichnet dieser Code verschiedene Handlungen auf, die Sie auf unserer Website ausführen. Sobald Sie unsere Website verlassen, werden diese Daten an die Google-Analytics-Server gesendet und dort gespeichert.</p><p>Google verarbeitet die Daten und wir bekommen Berichte über Ihr Userverhalten. Dabei kann es sich unter anderem um folgende Berichte handeln:</p><ul><li>Zielgruppenberichte: Über Zielgruppenberichte lernen wir unsere User besser kennen und wissen genauer, wer sich für unser Service interessiert.</li><li>Anzeigeberichte: Durch Anzeigeberichte können wir unsere Onlinewerbung leichter analysieren und verbessern.</li><li>Akquisitionsberichte: Akquisitionsberichte geben uns hilfreiche Informationen darüber, wie wir mehr Menschen für unser Service begeistern können.</li><li>Verhaltensberichte: Hier erfahren wir, wie Sie mit unserer Website interagieren. Wir können nachvollziehen welchen Weg Sie auf unserer Seite zurücklegen und welche Links Sie anklicken.</li><li>Conversionsberichte: Conversion nennt man einen Vorgang, bei dem Sie aufgrund einer Marketing-Botschaft eine gewünschte Handlung ausführen. Zum Beispiel, wenn Sie von einem reinen Websitebesucher zu einem Käufer oder Newsletter-Abonnent werden. Mithilfe dieser Berichte erfahren wir mehr darüber, wie unsere Marketing-Maßnahmen bei Ihnen ankommen. So wollen wir unsere Conversionrate steigern.</li><li>Echtzeitberichte: Hier erfahren wir immer sofort, was gerade auf unserer Website passiert. Zum Beispiel sehen wir wie viele User gerade diesen Text lesen.</li></ul><p><b>Warum verwenden wir Google Analytics auf unserer Webseite?</b></p><p>Unser Ziel mit dieser Website ist klar: Wir wollen Ihnen das bestmögliche Service bieten. Die Statistiken und Daten von Google Analytics helfen uns dieses Ziel zu erreichen.</p><p>Die statistisch ausgewerteten Daten zeigen uns ein klares Bild von den Stärken und Schwächen unserer Website. Einerseits können wir unsere Seite so optimieren, dass sie von interessierten Menschen auf Google leichter gefunden wird. Andererseits helfen uns die Daten, Sie als Besucher besser zu verstehen. Wir wissen somit sehr genau, was wir an unserer Website verbessern müssen, um Ihnen das bestmögliche Service zu bieten. Die Daten dienen uns auch, unsere Werbe- und Marketing-Maßnahmen individueller und kostengünstiger durchzuführen. Schließlich macht es nur Sinn, unsere Produkte und Dienstleistungen Menschen zu zeigen, die sich dafür interessieren.</p><p><b>Wie lange und wo werden die Daten gespeichert?</b></p><p>Google hat Ihre Server auf der ganzen Welt verteilt. Die meisten Server befinden sich in Amerika und folglich werden Ihre Daten meist auf amerikanischen Servern gespeichert. Hier können Sie genau nachlesen wo sich die Google-Rechenzentren befinden: <a href=\"https://www.google.com/about/datacenters/inside/locations/?hl=de\">https://www.google.com/about/datacenters/inside/locations/?hl=de</a></p><p>Ihre Daten werden auf verschiedenen physischen Datenträgern verteilt. Das hat den Vorteil, dass die Daten schneller abrufbar sind und vor Manipulation besser geschützt sind. In jedem Google-Rechenzentrum gibt es entsprechende Notfallprogramme für Ihre Daten. Wenn beispielsweise die Hardware bei Google ausfällt oder Naturkatastrophen Server lahmlegen, bleibt das Risiko einer Dienstunterbrechung bei Google dennoch gering.</p><p>Standardisiert ist bei Google Analytics eine Aufbewahrungsdauer Ihrer Userdaten von 26 Monaten eingestellt. Dann werden Ihre Userdaten gelöscht. Allerdings haben wir die Möglichkeit, die Aufbewahrungsdauer von Nutzdaten selbst zu wählen. Dafür stehen uns fünf Varianten zur Verfügung:</p><ul><li>Löschung nach 14 Monaten</li><li>Löschung nach 26 Monaten</li><li>Löschung nach 38 Monaten</li><li>Löschung nach 50 Monaten</li><li>Keine automatische Löschung</li></ul><p>Wenn der festgelegte Zeitraum abgelaufen ist, werden einmal im Monat die Daten gelöscht. Diese Aufbewahrungsdauer gilt für Ihre Daten, die mit Cookies, Usererkennung und Werbe-IDs (z.B. Cookies der DoubleClick-Domain) verknüpft sind. Berichtergebnisse basieren auf aggregierten Daten und werden unabhängig von Nutzerdaten gespeichert. Aggregierte Daten sind eine Zusammenschmelzung von Einzeldaten zu einer größeren Einheit.</p><p><b>Wie kann ich meine Daten löschen bzw. die Datenspeicherung verhindern?</b></p><p>Nach dem Datenschutzrecht der Europäischen Union haben Sie das Recht, Auskunft über Ihre Daten zu erhalten, sie zu aktualisieren, zu löschen oder einzuschränken. Mithilfe des Browser-Add-ons zur Deaktivierung von Google Analytics-JavaScript (ga.js, analytics.js, dc.js) verhindern Sie, dass Google Analytics Ihre Daten verwendet. Das Browser-Add-on können Sie unter <a href=\"https://tools.google.com/dlpage/gaoptout?hl=de\">https://tools.google.com/dlpage/gaoptout?hl=de</a> runterladen und installieren. Beachten Sie bitte, dass durch dieses Add-on nur die Datenerhebung durch Google Analytics deaktiviert wird.</p><p>Falls Sie grundsätzlich Cookies (unabhängig von Google Analytics) deaktivieren, löschen oder verwalten wollen, gibt es für jeden Browser eine eigene Anleitung:</p><p><a href=\"https://support.google.com/chrome/answer/95647?tid=111384663\">Chrome: Cookies in Chrome löschen, aktivieren und verwalten</a></p><p><a href=\"https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=111384663\">Safari: Verwalten von Cookies und Websitedaten mit Safari</a></p><p><a href=\"https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=111384663\">Firefox: Cookies löschen, um Daten zu entfernen, die Websites auf Ihrem Computer abgelegt haben</a></p><p><a href=\"https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=111384663\">Internet Explorer: Löschen und Verwalten von Cookies</a></p><p><a href=\"https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=111384663\">Microsoft Edge: Löschen und Verwalten von Cookies</a></p><p>Google Analytics ist aktiver Teilnehmer beim EU-U.S. Privacy Shield Framework, wodurch der korrekte und sichere Datentransfer persönlicher Daten geregelt wird. Mehr Informationen dazu finden Sie auf <a href=\"https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI\">https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;tid=111384663</a>. Wir hoffen wir konnten Ihnen die wichtigsten Informationen rund um die Datenverarbeitung von Google Analytics näherbringen. Wenn Sie mehr über den Tracking-Dienst erfahren wollen, empfehlen wir diese beiden Links: <a href=\"http://www.google.com/analytics/terms/de.html\">http://www.google.com/analytics/terms/de.html</a> und <a href=\"https://support.google.com/analytics/answer/6004245?hl=de\">https://support.google.com/analytics/answer/6004245?hl=de</a>.</p><p><b>Google Analytics IP-Anonymisierung</b></p><p>Wir haben auf dieser Webseite die IP-Adressen-Anonymisierung von Google Analytics implementiert. Diese Funktion wurde von Google entwickelt, damit diese Webseite die geltenden Datenschutzbestimmungen und Empfehlungen der lokalen Datenschutzbehörden einhalten kann, wenn diese eine Speicherung der vollständigen IP-Adresse untersagen. Die Anonymisierung bzw. Maskierung der IP findet statt, sobald die IP-Adressen im Google Analytics-Datenerfassungsnetzwerk eintreffen und bevor eine Speicherung oder Verarbeitung der Daten stattfindet.</p><p>Mehr Informationen zur IP-Anonymisierung finden Sie auf <a href=\"https://support.google.com/analytics/answer/2763052?hl=de\">https://support.google.com/analytics/answer/2763052?hl=de</a>.</p><p><b>Google reCAPTCHA Datenschutzerklärung</b></p><p>Unser oberstes Ziel ist es, unsere Webseite für Sie und für uns bestmöglich zu sichern und zu schützen. Um das zu gewährleisten, verwenden wir Google reCAPTCHA der Firma Google Inc. Für den europäischen Raum ist das Unternehmen Google Ireland Limited (Gordon House, Barrow Street Dublin 4, Irland) für alle Google-Dienste verantwortlich. Mit reCAPTCHA können wir feststellen, ob Sie auch wirklich ein Mensch aus Fleisch und Blut sind und kein Roboter oder eine andere Spam-Software. Unter Spam verstehen wir jede, auf elektronischen Weg, unerwünschte Information, die uns ungefragter Weise zukommt. Bei den klassischen CAPTCHAS mussten Sie zur Überprüfung meist Text- oder Bildrätsel lösen. Mit reCAPTCHA von Google müssen wir Sie meist nicht mit solchen Rätseln belästigen. Hier reicht es in den meisten Fällen, wenn Sie einfach ein Häkchen setzen und so bestätigen, dass Sie kein Bot sind. Mit der neuen Invisible reCAPTCHA Version müssen Sie nicht mal mehr ein Häkchen setzen. Wie das genau funktioniert und vor allem welche Daten dafür verwendet werden, erfahren Sie im Verlauf dieser Datenschutzerklärung.</p><p><b>Was ist reCAPTCHA?</b></p><p>reCAPTCHA ist ein freier Captcha-Dienst von Google, der Webseiten vor Spam-Software und den Missbrauch durch nicht-menschliche Besucher schützt. Am häufigsten wird dieser Dienst verwendet, wenn Sie Formulare im Internet ausfüllen. Ein Captcha-Dienst ist eine Art automatischer Turing-Test, der sicherstellen soll, dass eine Handlung im Internet von einem Menschen und nicht von einem Bot vorgenommen wird. Im klassischen Turing-Test (benannt nach dem Informatiker Alan Turing) stellt ein Mensch die Unterscheidung zwischen Bot und Mensch fest. Bei Captchas übernimmt das auch der Computer bzw. ein Softwareprogramm. Klassische Captchas arbeiten mit kleinen Aufgaben, die für Menschen leicht zu lösen sind, doch für Maschinen erhebliche Schwierigkeiten aufweisen. Bei reCAPTCHA müssen Sie aktiv keine Rätsel mehr lösen. Das Tool verwendet moderne Risikotechniken, um Menschen von Bots zu unterscheiden. Hier müssen Sie nur noch das Textfeld „Ich bin kein Roboter“ ankreuzen bzw. bei Invisible reCAPTCHA ist selbst das nicht mehr nötig. Bei reCAPTCHA wird ein JavaScript-Element in den Quelltext eingebunden und dann läuft das Tool im Hintergrund und analysiert Ihr Benutzerverhalten. Aus diesen Useraktionen berechnet die Software einen sogenannten Captcha-Score. Google berechnet mit diesem Score schon vor der Captcha-Eingabe wie hoch die Wahrscheinlichkeit ist, dass Sie ein Mensch sind. reCAPTCHA bzw. Captchas im Allgemeinen kommen immer dann zum Einsatz, wenn Bots gewisse Aktionen (wie z.B. Registrierungen, Umfragen usw.) manipulieren oder missbrauchen könnten.</p><p><b>Warum verwenden wir reCAPTCHA auf unserer Webseite?</b></p><p>Wir wollen nur Menschen aus Fleisch und Blut auf unserer Seite begrüßen. Bots oder Spam-Software unterschiedlichster Art dürfen getrost zuhause bleiben. Darum setzen wir alle Hebel in Bewegung, uns zu schützen und die bestmögliche Benutzerfreundlichkeit für Sie anzubieten. Aus diesem Grund verwenden wir Google reCAPTCHA der Firma Google. So können wir uns ziemlich sicher sein, dass wir eine „botfreie“ Webseite bleiben. Durch die Verwendung von reCAPTCHA werden Daten an Google übermittelt, um festzustellen, ob Sie auch wirklich ein Mensch sind. reCAPTCHA dient also der Sicherheit unserer Webseite und in weiterer Folge damit auch Ihrer Sicherheit. Zum Beispiel könnte es ohne reCAPTCHA passieren, dass bei einer Registrierung ein Bot möglichst viele E-Mail-Adressen registriert, um im Anschluss Foren oder Blogs mit unerwünschten Werbeinhalten „zuzuspamen“. Mit reCAPTCHA können wir solche Botangriffe vermeiden.</p><p><b>Welche Daten werden von reCAPTCHA gespeichert?</b></p><p>reCAPTCHA sammelt personenbezogene Daten von Usern, um festzustellen, ob die Handlungen auf unserer Webseite auch wirklich von Menschen stammen. Es kann also die IP-Adresse und andere Daten, die Google für den reCAPTCHA-Dienst benötigt, an Google versendet werden. IP-Adressen werden innerhalb der Mitgliedstaaten der EU oder anderer Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum fast immer zuvor gekürzt, bevor die Daten auf einem Server in den USA landen. Die IP-Adresse wird nicht mit anderen Daten von Google kombiniert, sofern Sie nicht während der Verwendung von reCAPTCHA mit Ihrem Google-Konto angemeldet sind. Zuerst prüft der reCAPTCHA-Algorithmus, ob auf Ihrem Browser schon Google-Cookies von anderen Google-Diensten (YouTube. Gmail usw.) platziert sind. Anschließend setzt reCAPTCHA ein zusätzliches Cookie in Ihrem Browser und erfasst einen Schnappschuss Ihres Browserfensters.</p><p><b>Wie lange und wo werden die Daten gespeichert?</b></p><p>Durch das Einfügen von reCAPTCHA werden Daten von Ihnen auf den Google-Server übertragen. Wo genau diese Daten gespeichert werden, stellt Google, selbst nach wiederholtem Nachfragen, nicht klar dar. Ohne eine Bestätigung von Google erhalten zu haben, ist davon auszugehen, dass Daten wie Mausinteraktion, Verweildauer auf der Webseite oder Spracheinstellungen auf den europäischen oder amerikanischen Google-Servern gespeichert werden. Die IP-Adresse, die Ihr Browser an Google übermittelt, wird grundsätzlich nicht mit anderen Google-Daten aus weiteren Google-Diensten zusammengeführt. Wenn Sie allerdings während der Nutzung des reCAPTCHA-Plug-ins bei Ihrem Google-Konto angemeldet sind, werden die Daten zusammengeführt.Dafür gelten die abweichenden Datenschutzbestimmungen der Firma Google.</p><p><b>Wie kann ich meine Daten löschen bzw. die Datenspeicherung verhindern?</b></p><p>Wenn Sie wollen, dass über Sie und über Ihr Verhalten keine Daten an Google übermittelt werden, müssen Sie sich, bevor Sie unsere Webseite besuchen bzw. die reCAPTCHA-Software verwenden, bei Google vollkommen ausloggen und alle Google-Cookies löschen. Grundsätzlich werden die Daten sobald Sie unsere Seite aufrufen automatisch an Google übermittelt. Um diese Daten wieder zu löschen, müssen Sie den Google-Support auf <a href=\"https://support.google.com/?hl=de&amp;tid=111384663\">https://support.google.com/?hl=de&amp;tid=111384663</a> kontaktieren.</p><p>Wenn Sie also unsere Webseite verwenden, erklären Sie sich einverstanden, dass Google LLC und deren Vertreter automatisch Daten erheben, bearbeiten und nutzen.</p><p>Etwas mehr über reCAPTCHA erfahren Sie auf der Webentwickler-Seite von Google auf <a href=\"https://developers.google.com/recaptcha/\">https://developers.google.com/recaptcha/</a>. Google geht hier zwar auf die technische Entwicklung der reCAPTCHA näher ein, doch genaue Informationen über Datenspeicherung und datenschutzrelevanten Themen sucht man auch dort vergeblich. Eine gute Übersicht über die grundsätzliche Verwendung von Daten bei Google finden Sie in der hauseigenen Datenschutzerklärung auf <a href=\"https://policies.google.com/privacy?hl=de&amp;tid=111384663\">https://www.google.com/intl/de/policies/privacy/</a>.</p><p>Quelle: Erstellt mit dem Datenschutz Generator von <a href=\"https://www.adsimple.at/seo-suchmaschinenoptimierung/\">AdSimple® SEO</a> in Kooperation mit <a href=\"https://www.bauguide.at/\">bauguide.at</a></p>"
  }

  return (
    <>
      <PageProvider typeName={PrivacyPage.PageType} slug={slug}>
        <NavbarHeader/>
        <MDBContainer id="message" className="py-5 my-5">
        <section>
            <RichTextField fieldOptions={{fieldName: "privacymaincontent1"}}/>
            <p
              dangerouslySetInnerHTML={{ __html: privacy.rawValue }}
            ></p>
            </section>
            <div className="text-left">
              <p className="mb-1">Wir speichern von Ihnen folgende Daten:</p>
              {/* {this.props.auth.uid ? (
                <UserDetails showAll={true} />
              ) : (
                <p className="text-muted">Sie sind nicht angemeldet</p>
              )} */}
              {cookie ? (
                <>
                  <p className="green-text">Sie haben Cookies akzeptiert.</p>
                  <p>
                    <MDBIcon icon="check-circle" className="green-text mr-2" />
                    Essenziell
                  </p>
                  {JSON.parse(cookie).marketing ? (
                    <p>
                      <MDBIcon
                        icon="check-circle"
                        className="green-text mr-2"
                      />
                      Marketing
                    </p>
                  ) : (
                    <p>
                      <MDBIcon icon="times-circle" className="red-text mr-2" />
                      Marketing
                    </p>
                  )}
                  {JSON.parse(cookie).statistics ? (
                    <p>
                      <MDBIcon
                        icon="check-circle"
                        className="green-text mr-2"
                      />
                      Statistiken
                    </p>
                  ) : (
                    <p>
                      <MDBIcon icon="times-circle" className="red-text mr-2" />
                      Statistiken
                    </p>
                  )}
                  <MDBBtn
                    onClick={() => {
                      localStorage.removeItem("cookiesettings");
                      window.location.reload();
                    }}
                    color="danger"
                    size="sm"
                  >
                    Einwilligung zurückziehen
                  </MDBBtn>
                </>
              ) : (
                <p className="red-text">
                  Sie haben die Cookies nicht akzeptiert.
                </p>
              )}
            </div>

            
              
          {/* {this.props.location.pathname === "/agb" && (
            <div className="text-left">
              <p dangerouslySetInnerHTML={{ __html: data.gtc }}></p>
            </div>
          )}
          {this.props.location.pathname === "/shipping" && (
            <div className="text-left">
              <p dangerouslySetInnerHTML={{ __html: data.shipping }}></p>
            </div>
          )}
          {this.props.location.pathname === "/cancellation" && (
            <div className="text-left">
              <p
                dangerouslySetInnerHTML={{ __html: data.cancellationPolicy }}
              ></p>
            </div>
          )} */}
        </MDBContainer>
        <AdvancedFooter
          copyrightText={'CC'}
          copyrightUrl={'mailto:admin@tuwien.club'}
        />
      </PageProvider>
    </>
  )
}

PrivacyPage.PageType = 'PrivacyPage'
PrivacyPage.ChildPages = []

export default PrivacyPage
